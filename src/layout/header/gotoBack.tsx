"use client"
import CustomIcons from "@/components/web/icons";
import { MdArrowBack } from "react-icons/md";

const GotoBack = () => {
  return (
    <span onClick={() => window.history.back()}>
            <CustomIcons IconName={MdArrowBack}  className='cursor-pointer hover:scale-90 md:text-xl' /> 
            </span>
  )
}

export default GotoBack
