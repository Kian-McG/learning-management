import { useState, useEffect } from "react";

type TUseCarousel = {
  totalImages: number;
  interval?: number;
};

export const useCarousel = ({ totalImages, interval = 5000 }: TUseCarousel) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, interval);

    return () => clearInterval(intervalId);
  }, [totalImages, interval]);

  return currentImage;
};
