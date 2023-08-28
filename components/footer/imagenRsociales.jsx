import React, { useState } from 'react';
import Image from 'next/image';
function ImageHover({ initialImage, alternativeImage }) {
  const [image, setImage] = useState(initialImage);

  const handleMouseEnter = () => {
    setImage(alternativeImage);
  };

  const handleMouseLeave = () => {
    setImage(initialImage);
  };

  return (
    <>
        <Image
        style={{width:'40px', height:'40px'}}
        src={image}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt="example image"
        />
        </>
  );
}

export default ImageHover;