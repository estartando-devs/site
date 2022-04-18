import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import { getKeyByCourse } from './utils';
import { IdCardProps } from '.';

export const useIdCardHandlers = ({
  course,
  image,
}: Required<Pick<IdCardProps, 'course' | 'image'>>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [imageSrc, setimageSrc] = useState<{
    src: string;
    alt: string;
  }>(image);
  const courseKey = getKeyByCourse(course);

  useEffect(() => {
    const imageUploaded = JSON.parse(
      sessionStorage.getItem('id-card-image') || '{}'
    );

    if (imageUploaded) {
      setimageSrc((prev) => ({ ...prev, ...imageUploaded.image }));
    }
  }, []);

  const handleDownloadImage = async () => {
    const element = ref?.current;

    if (!element) {
      return;
    }
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      allowTaint: true,
    });
    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return {
    ref,
    imageSrc,
    courseKey,
    handleDownloadImage,
  };
};
