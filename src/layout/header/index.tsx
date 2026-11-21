import CustomIcons  from "@/components/web/icons"
import { GoSearch } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";
import GotoBack from "./gotoBack";
import Link from "next/link";




const HeaderLayout = () => {
  return (
    <div className='w-full grid grid-cols-12 shadow-md  px-2 py-2 md:py-5 md:px-12   place-items-center '>
      <div className='col-span-2 w-full flex items-center justify-start gap-3 '>
        <GotoBack/>
        
        <CustomIcons className="md:text-xl" IconName={GoSearch}  />
       
      </div>

      <div className='col-span-8'>
       <Link href="/" className="font-bold text-lg md:text-2xl   font-body">TheLocal</Link>
      </div>

       <div className='col-span-2  w-full  flex items-center justify-end gap-3 '>
        <CustomIcons className="md:text-xl" IconName={SlHeart}  />
        <span className="relative">
          <CustomIcons className="md:text-xl" IconName={PiShoppingCartSimple}  />
          <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs rounded-full h-4 w-4 flex items-center justify-center p-2">
            2
          </span>
        </span>
        <CustomIcons className="md:text-xl" IconName={BiUser}  />
      </div>
    </div>
  )
}

export default HeaderLayout
