import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import DropDownAccordion from "./dropDownAccordion";
import React from "react";
import { RiRefreshLine } from "react-icons/ri";

type props = {
  openFilter: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSidebar = ({ openFilter, setOpenFilter }: props) => {
  return (
    <Sheet open={openFilter} onOpenChange={setOpenFilter}>
      <SheetContent side="left">
        <SheetHeader className="p-0 pt-10">
          <div className="flex justify-between items-center px-6  ">
            <h3 className="font-bold font-heading text-lg ">Filters</h3>
            <span className="font-body text-md font-medium  text-foreground/50 inline-flex items-center gap-1">
              <RiRefreshLine /> Clear All
            </span>
          </div>
        </SheetHeader>

        <div className=" border w-full  ">
          <DropDownAccordion />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
