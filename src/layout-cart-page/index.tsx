import MyImage from "@/components/web/myImage";
import Banners from "./banners";
import ProductQuantity from "@/components/web/QuantitySelector";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowRoundBack } from "react-icons/io";

import Link from "next/link";

const CartPageLayout = () => {
  return (
    <div className="px-2 md:px-10  py-5">
      <Banners />

      <div className="grid grid-cols-12 place-items-start  gap-8 w-full  mt-10 relative">
        <div className="col-span-12 md:col-span-7 w-full  ">
        {
          [...Array(4)].map((_, index) => (
          <div key={index}   className="flex items-center justify-between gap-4 border-b p-5">
            <div className="flex justify-start items-center gap-4 w-full">
              <MyImage
                path="/products/t-shirt-2.png"
                width={130}
                className="border"
              />
              <div>
                <h4 className="mb-2 font-heading text-foreground text-lg capitalize font-medium ">
                  Basic black t-shirt
                </h4>
                <ProductQuantity />
              </div>
            </div>
            <div className="flex justify-start items-end   flex-col  gap-4 w-full">
              <span className="px-2 text-foreground/60 font-medium font-body text-lg">
                $ 20.00
              </span>
              <Button
                size="sm"
                className=" hover:text-gray-500 text-sm cursor-pointer"
                variant="ghost"
              >
                <RxCross1 /> Remove
              </Button>
            </div>
          </div>
      ))
    }
        </div>


        <div className="   sticky top-3 col-span-12 md:col-span-5 w-full p-5 ">
         <div className="rounded-lg p-5 bg-gray-100 ">
           <div className=" flex justify-between items-center border-b pb-3">
            <h4 className=" font-heading text-foreground text-md capitalize font-medium ">
              Subtotal
            </h4>

            <span className=" text-foreground/60 font-medium font-body text-md">
              $ 200.00
            </span>
          </div>

          <div className=" flex justify-center items-between gap-2  flex-col py-5 pb-0">
            <h4 className=" font-heading text-foreground text-md capitalize font-medium ">
              Shipment
            </h4>

            <div className=" flex justify-between items-center pb-5">
              <h4 className=" font-heading text-foreground/60 text-md capitalize  ">
                Shipping
              </h4>

               <span className=" text-foreground/60 font-medium font-body text-md">
                $ 5.00
              </span>
            </div>

             <div className=" flex justify-between items-center border-t pt-3  ">
            <h4 className=" font-heading text-foreground text-md capitalize font-bold ">
              Total
            </h4>

            <span className=" text-foreground/60 font-bold font-body text-md">
              $ 205.00
            </span>
          </div>

        
          </div>
         </div>

          <div className="">
              <Button variant="default" className="w-full mt-5 p-5">
            Proceed to checkout
          </Button>

          <Link href="/store-page" className=" text-foreground/60  font-body text-md flex items-center mt-2">
          <IoIosArrowRoundBack className="text-lg" /> Continue Shopping
          </Link>
          </div>

          <div className="flex justify-start items-center gap-1  mt-5">
            <input type="text" className="border rounded-lg p-2 min-h-8" placeholder="Enter coupon code" />
            <Button variant="default" className="  p-5"> Apply Coupon </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPageLayout;
