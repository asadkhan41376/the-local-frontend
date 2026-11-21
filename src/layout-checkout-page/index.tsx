import MyImage from "@/components/web/myImage";
import Banners from "./banners";
import ProductQuantity from "@/components/web/QuantitySelector";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";


import Link from "next/link";

const CheckoutPageLayout = () => {
  return (
    <div className="px-2 md:px-10  py-5">
      <Banners />

      <form className="grid grid-cols-12 place-items-start  gap-8 w-full  mt-10 relative">
        <div className="col-span-12 md:col-span-7 w-full  ">
        <section className="space-y-5 mt-5">
        <h2 className="font-heading text-xl font-semibold py-3">
          Contact Information
        </h2>

       <div className="flex gap-5  justify-between items-center">
         <div className="space-y-2 w-full">
          <Label htmlFor="email">Email</Label>

          <Input
          className="w-full p-5"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2 w-full">
          <Label htmlFor="phone">Phone Number</Label>

          <Input
          className="w-full p-5"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
          />
        </div>
       </div>
      </section>

      <Separator />

      {/* Shipping Address */}
      <section className="space-y-5 mt-5">
        <h2 className="font-heading text-xl font-semibold ">
          Shipping Address
        </h2>

        {/* First + Last Name */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>

            <Input
            className="w-full p-5"
              id="firstName"
              name="firstName"
              placeholder="First name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>

            <Input
            className="w-full p-5"
              id="lastName"
              name="lastName"
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>

          <Input
          className="w-full p-5"
            id="address"
            name="address"
            placeholder="House no, street, area"
          />
        </div>

        {/* City + State */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>

            <Input
            className="w-full p-5"
              id="city"
              name="city"
              placeholder="City"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>

            <Input
            className="w-full p-5"
              id="state"
              name="state"
              placeholder="State"
            />
          </div>
        </div>

        {/* Pincode */}
        <div className="space-y-2">
          <Label htmlFor="pincode">Pincode</Label>

          <Input
          className="w-full p-5"
            id="pincode"
            name="pincode"
            placeholder="313001"
          />
        </div>
      </section>

      <Separator />

      {/* Payment */}
      <section className="space-y-5 mt-5">
        <h2 className="font-heading text-xl font-semibold">
          Payment Method
        </h2>

        <RadioGroup
          name="payment"
          defaultValue="cod"
          className="space-y-3"
          
        >
          <Label
            htmlFor="cod"
            className="flex cursor-pointer items-center gap-3 rounded-lg border p-4"
          >
            <RadioGroupItem value="cod" id="cod" />

            <div>
              <p className="font-medium">
                Cash on Delivery
              </p>

              <p className="text-sm text-muted-foreground">
                Pay when your order arrives.
              </p>
            </div>
          </Label>

          <Label
            htmlFor="online"
            className="flex cursor-pointer items-center gap-3 rounded-lg border p-4"
          >
            <RadioGroupItem value="online" id="online" />

            <div>
              <p className="font-medium">
                Online Payment
              </p>

              <p className="text-sm text-muted-foreground">
                Pay securely online.
              </p>
            </div>
          </Label>
        </RadioGroup>
      </section>
        </div>


        <div className="   sticky top-3 col-span-12 md:col-span-5 w-full p-5 ">
         <div className="rounded-lg p-5 bg-gray-100 ">
            <div className=" flex justify-between items-center  mb-3 pb-3">
            <h4 className=" font-heading text-foreground text-md capitalize font-medium ">
              Products
            </h4>
             <h4 className=" font-heading text-foreground text-md capitalize font-medium ">
              Subtotal
            </h4>

          </div>
          
           <div className=" flex justify-between items-center flex-col border-b mb-3 pb-3">
            <div className="flex justify-between items-center w-full px-3">
              <span className=" text-foreground/60 font-medium font-body text-md">
              black t-shirt
            </span>

            <span className=" text-foreground/60 font-medium font-body text-md">
              $ 200.00
            </span>

            </div>
            
            
          </div>
           <div className=" flex justify-between items-center border-b mb-3 pb-3">
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
            <input
             type="text" className="border rounded-lg  min-h-8 w-full p-5" placeholder="Enter coupon code" />
            <Button variant="default" className="  p-5"> Apply Coupon </Button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default CheckoutPageLayout;
