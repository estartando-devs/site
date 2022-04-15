import { ChangeEvent, useCallback, useState } from 'react';
import { CroppedArea } from '../utils/cropImage';

export const useCropImage = () => {
  const [croppedArea, setCroppedArea] = useState<CroppedArea>(
    {} as CroppedArea
  );
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState<string | ArrayBuffer | undefined>(
    undefined
  );
  const [showCopper, setShowCopper] = useState(false);

  const onSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setShowCopper(true);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener('load', () => {
        if (reader.result) setImage(reader.result);
      });
    }
  };

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  return {
    crop,
    zoom,
    croppedArea,
    image,
    showCopper,
    setCrop,
    setZoom,
    onCropComplete,
    onSelectFile,
    setShowCopper,
  };
};
