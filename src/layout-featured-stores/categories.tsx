
import CustomSwiper from "@/components/web/customSwiper";
import MyImage from "@/components/web/myImage";
import categories from "@/lib/json/products.json";
const Categories = () => {
 const categoriesSlide = categories.map((c) => (
    <div key={c.id} className="flex justify-center ">
      <div className="flex  justify-center p-2 items-center   flex-col md:flex-row border rounded-lg overflow-hidden flex-1">
        <MyImage path={c.image} width={25} height={25} className="w-auto h-auto " />
        <h4  className={`flex-1   text-center text-foreground  border-foreground  px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-all duration-300 ease-in-out capitalize `}>
          {c.category}
        </h4>
      </div>
    </div>
  ));

  return (
    <div className="md:p-12 px-4 py-5 ">
      <CustomSwiper
        slide={categoriesSlide}
        perViewDesktop={6}
        perViewMobile={3}
      />
    </div>
  );
}

export default Categories
