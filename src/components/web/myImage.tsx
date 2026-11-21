"use client";

import { MyImageProps } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

const MyImage = ({ path, fill, height, width, className }: MyImageProps) => {
  const [imgUrl, setImgUrl] = useState(path);
  const [loading, setLoading] = useState(false);
  return (
    <Image
      src={imgUrl}
      alt="missing Image"
      fill={fill}
      {...(!fill && {
        height: height ? height : 100,
        width: width ? width : 400,
      })}
      // {
      //     ...(fill && {style: {objectFit: 'cover' , width: '100%', height: '100%'}})
      // }
      onError={() => setImgUrl("/placeholder_image.png")}
      onLoad={() => setLoading(true)}
      className={`${loading ? "blur-0" : "blur-sm"} transition-all duration-300   ${className}`}
    ></Image>
  );
};

export default MyImage;
