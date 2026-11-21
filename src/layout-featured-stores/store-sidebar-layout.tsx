import DropDownAccordion from "@/components/shadcn/dropDownAccordion"
import CustomIcons from "@/components/web/icons";
import { ReactNode } from "react"
import { RiRefreshLine } from "react-icons/ri";

const StoreSidebarLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className="grid grid-cols-12 gap-5 w-full ">
        <div className="md:col-span-3 md:block hidden border w-full   rounded-lg ">
          <div className="flex justify-between items-center px-6 py-4 border-b ">
            <h3 className="font-bold font-heading text-lg ">Filters</h3>
           <span className="font-body text-md font-medium  text-foreground/50 inline-flex items-center gap-1">< RiRefreshLine /> Clear All</span> 
          </div>
<DropDownAccordion/>
        </div>
        <div className="md:col-span-9 col-span-12 w-full grid grid-cols-12 gap-4 ">
            {children}
        </div>
      
    </div>
  )
}

export default StoreSidebarLayout
