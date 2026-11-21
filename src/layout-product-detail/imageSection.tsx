import MyImage from "@/components/web/myImage";
import ProductQuantity from "@/components/web/QuantitySelector";
import product from "@/lib/json/products.json";
import { Button } from "@/components/ui/button";
import MobileImageSection from "./mobileImageSection";

const ImageSection = () => {
  return (
   
      <div className="grid grid-cols-12 gap-3 h-full relative w-[90%] ">
        <div className="col-span-6 hidden  sticky top-0 rounded-lg w-full md:flex gap-4  p-1 ">
          <div className=" flex justify-start items-center flex-col gap-5 py-2 h-full border ">
            <MyImage path={product[0].image} width={100} height={100}  className=""/>
            <MyImage path={product[0].image} width={100} height={100} className="" />
          </div>
          <div className="flex justify-center items-center w-auto border h-auto ">
            <MyImage path={product[0].image} width={900} height={1600} />
          </div>
        </div>
        <div className="col-span-12 md:hidden block rounded-lg w-full  gap-4  p-1 border ">
          <MobileImageSection />
        </div>

        <div className="col-span-12 md:col-span-6 rounded-lg w-full p-1 md:px-5 px-2">
          <div className="flex gap-3 flex-col items-start justify-start w-full">
            <span className="text-foreground/60 font-medium font-body text-md">
              {product[0].category}
            </span>
            <h4 className="text-3xl text-foreground font-heading font-bold ">
              {product[0].name}
            </h4>
            <span className="text-foreground/60 font-medium font-body text-xl">
              {product[0].price}
            </span>
            <p className="text-md font-body text-foreground font-light">
              {product[0].description}
            </p>

            <h4 className="text-md font-body text-foreground font-medium">
              size
            </h4>

            <div className="flex justify-start items-start gap-4">
              {[...Array("S", "M", "L", "XL", "XXl")].map((size, index) => (
                <span
                  key={index}
                  className="border p-2 px-4 flex-1 w-full hover:border-black cursor-pointer active:bg-foreground/5 "
                >
                  {size}
                </span>
              ))}
            </div>
            <ProductQuantity />

            <div className="mt-3 w-full gap-2 flex justify-start items-center">
              <Button 
              disabled={true}
              className="flex-1 py-5 text-md cursor-pointer" variant="default">
                Add To cart  
                {/* disable when no size select */}
                
              </Button>

               <Button 
               disabled={true}
               className="flex-1 py-5 text-md cursor-pointer hover:bg-foreground/95 hover:text-background" variant="outline">
                Checkout
                {/* disable when no size select */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ImageSection;
