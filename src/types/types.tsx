

import { IconType } from "react-icons";
export type iconsTypes ={
    IconName:IconType ,
    className?:string,
    
}


export type HeadingTypes ={
    headingText:string ,
    className?:string
}


export type ProductCardTypes ={
     id: number,
        image: string,
        name: string,
        price: string,
        description: string
    }



  export  type MyImageProps = {
        path: string;
        fill?:boolean;
        height?: number;
        width?: number;
        className?: string;
    
    }