"use client";
import SortDrawer from "@/components/shadcn/sortDrawer";
import { HiOutlineSortDescending } from "react-icons/hi";
import { BiFilterAlt } from "react-icons/bi";
import { useState } from "react";
import MobileSidebar from "@/components/shadcn/mobile-sidebar";

const DrawerButtons = () => {
 
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="flex justify-center items-center gap-5 px-3 w-full">
      <span
        onClick={() => setOpen(true)}
        className="flex-1 font-heading text-lg font-medium  text-foreground inline-flex justify-center items-center gap-1 border w-full py-1 "
      >
        <HiOutlineSortDescending className="text-lg" /> Sort
      </span>

      <span onClick={()=>setOpenFilter(true)} className="flex-1 font-heading text-lg font-medium  text-foreground inline-flex justify-center items-center gap-1 border w-full py-1 ">
        <BiFilterAlt className="text-lg" /> Filters
      </span>

      <SortDrawer open={open} setOpen={setOpen}  />
      <MobileSidebar openFilter={openFilter} setOpenFilter={setOpenFilter} />
    </div>
  );
};

export default DrawerButtons;
