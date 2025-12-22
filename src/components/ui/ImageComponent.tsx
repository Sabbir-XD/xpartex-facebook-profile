import React, { FC, ReactElement } from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  fill: boolean;
  className: string;
  priority: boolean;
}

const ImageComponent: FC<ImageProps> = ({
  src,
  alt,
  fill,
  className,
  priority,
}): ReactElement => {
  return (
    <Image
  src={src}
  alt={alt}
  fill={fill}
  className={className}
  priority={priority}
/>
  );
};

export default ImageComponent;