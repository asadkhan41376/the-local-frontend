import CustomIcons from "./icons";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { ProductCardTypes } from "@/types/types";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import MyImage from "./myImage";

const ProductCard = ({ product }: { product: ProductCardTypes }) => {
  return (
    <div className=" relative w-full border rounded-lg  overflow-hidden  cursor-pointer group  ">
      <MyImage
     
        path={product.image}
        className="   group-hover:scale-102 duration-200"
      />
      <div className=" p-1 py-2 pt-4  ">
        <h3 className="text-lg font-thin px-2  "> {product.name} </h3>
        <p className="text-gray-500 font-thin px-2">{product.price}</p>
        <button className="bg-foreground md:hidden text-background  flex justify-center items-center gap-2 py-1 mt-2 text-lg font-heading font-thin rounded-lg w-full"><CiShoppingCart className=""/>Add to Cart</button>

      </div>

      <div className="absolute flex flex-col gap-2  top-5 right-0  rounded-full p-1 opacity-0 group-hover:opacity-100 group-hover:right-2  duration-500">
        <CustomIcons
          IconName={CiShoppingCart}
          className="bg-foreground  rounded-full p-1 active:scale-95 transition-all duration-75 text-background"
        />

        <CustomIcons
          IconName={CiHeart}
          className="bg-foreground rounded-full p-1 active:scale-95 transition-all duration-300 text-background"
        />
        <CustomIcons
          IconName={MdOutlineRemoveRedEye}
          className="bg-foreground rounded-full p-1 active:scale-95 transition-all duration-300 text-background"
        />
      </div>
    </div>
  );
};

export default ProductCard;
