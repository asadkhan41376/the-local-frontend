import {iconsTypes} from "../../types/types";

const CustomIcons = ({IconName, className}:iconsTypes) => {
  return (
    
      <IconName className={`text-2xl   md:text-3xl font-body  ${className}`} />
   
  )
}

export default CustomIcons
