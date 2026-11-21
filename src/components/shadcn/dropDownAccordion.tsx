import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import categories from "@/lib/json/products.json";
import PriceSlider from "./priceSlider";
import ToggleTabs from "./toggleTabs";
const DropDownAccordion = () => {
  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1", "item-2", "item-3", "item-4"]}
    >
      <AccordionItem value="item-1" className="px-6">
        <AccordionTrigger className="font-bold cursor-pointer font-heading text-lg items-center ">
          Category
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          {categories.map((c) => (
            <div
              key={c.id}
              className="flex gap-2 my-2 justify-start items-center "
            >
              <input
                type="checkbox"
                name="checkbox"
                id={`${c.id}`}
                className="w-5 h-5 rounded-lg accent-foreground"
              />
              <label
                htmlFor={`${c.id}`}
                className="capitalize text-md font-medium font-body"
              >
                {c.category} <span className="text-gray-500">(32)</span>
              </label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="px-6">
        <AccordionTrigger className="font-bold cursor-pointer font-heading text-lg items-center ">
          Price Range
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <PriceSlider />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="px-6">
        <AccordionTrigger className="font-bold cursor-pointer font-heading text-lg items-center ">
          Size
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <ToggleTabs item={["XS", "S", "M", "L", "XL", "XXl"]} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="px-6">
        <AccordionTrigger className="font-bold cursor-pointer font-heading text-lg items-center ">
          Rating
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <ToggleTabs item={["4 & Up", "3 & Up", "2 & Up"]} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DropDownAccordion;
