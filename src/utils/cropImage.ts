export type CroppedArea = {
  width: number;
  height: number;
  x: number;
  y: number;
};

const createImage = (
  url: string | ArrayBuffer | undefined
): Promise<CanvasImageSource> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url as string;
  });

function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180;
}

export async function getCroppedImg(
  imageSrc: string | ArrayBuffer | undefined,
  pixelCrop: CroppedArea,
  rotation = 0
) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const canvasCtx = canvas.getContext('2d');

  const maxSize = Math.max(image.width as number, image.height as number);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea;
  canvas.height = safeArea;

  // translate canvas context to a central location on image to allow rotating around the center.
  canvasCtx?.translate(safeArea / 2, safeArea / 2);
  canvasCtx?.rotate(getRadianAngle(rotation));
  canvasCtx?.translate(-safeArea / 2, -safeArea / 2);

  // draw rotated image and store data.
  canvasCtx?.drawImage(
    image,
    safeArea / 2 - Number(image.width) * 0.5,
    safeArea / 2 - Number(image.height) * 0.5
  );

  const data = canvasCtx?.getImageData(0, 0, safeArea, safeArea);

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image with correct offsets for x,y crop values.
  canvasCtx?.putImageData(
    data as ImageData,
    0 - safeArea / 2 + Number(image.width) * 0.5 - pixelCrop.x,
    0 - safeArea / 2 + Number(image.height) * 0.5 - pixelCrop.y
  );

  // As Base64 string
  // return canvas.toDataURL("image/jpeg");
  return canvas;
}
