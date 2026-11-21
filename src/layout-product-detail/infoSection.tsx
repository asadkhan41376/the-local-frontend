import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reviews from "./reviews";
import AdditionalInformation from "./additionalInformation";
const InfoSection = () => {
  return (
    <div className="md:w-[80%] w-full flex flex-col justify-start items-start gap-3 pt-8 p-2">
      <Accordion type="single" defaultValue="reviews" collapsible className="w-full">
        <AccordionItem value="reviews" className="w-full   px-3  ">
          <AccordionTrigger className="flex items-center">Reviews</AccordionTrigger>

          <AccordionContent className="w-full">
            <Reviews />
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="Additional-Information" className="w-full   px-3 my-2  ">
          <AccordionTrigger className="flex items-center">Additional Information</AccordionTrigger>

          <AccordionContent className="w-full">
           <AdditionalInformation/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default InfoSection;
