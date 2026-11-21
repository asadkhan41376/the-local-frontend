import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";


 const PriceSort = [
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
    "Best Selling",
    "Top Rated",
  ];
type props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  
};
const SortDrawer = ({ open, setOpen }: props) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      {/* <DrawerTrigger>Open</DrawerTrigger> */}
      <DrawerContent className="py-5">
        <DrawerHeader className="p-0 pb-3 m-0">
          <DrawerTitle
            className="text-lg font-bold font-heading
      "
          >
            Sort By
          </DrawerTitle>
        </DrawerHeader>
        <DrawerDescription className="flex justify-center items-center flex-wrap gap-4">
          {PriceSort.map((item) => (
            <span className="border text-foreground py-2 px-5 rounded-lg ">
              {item}
            </span>
          ))}
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
};

export default SortDrawer;
