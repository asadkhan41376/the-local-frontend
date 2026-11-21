import CustomSwiper from "@/components/web/customSwiper";
import Heading from "@/components/web/heading";

const LocalStore = () => {
  const categorySlides = [...Array(8)].map((_, index) => (
    <div key={index} className="overflow-hidden rounded-lg cursor-pointer ">
      <div className="w-full h-45 bg-[url(/store_image/store_2.png)] bg-center bg-cover bg-no-repeat rounded-lg text-center relative hover:scale-102  duration-1000">
      <div className="absolute bottom-0 bg-linear-to-b to-black from-[#00000059] w-full  text-left p-2"> 
        <h2 className="text-lg text-heading font-bold text-white">Urban Fit Store</h2>     
        <p className="text-sm text-body text-white">Clothing & Accessories</p>
         </div>
      
    </div>
    </div>
  ));
  return (
    <div className=" w-full  ">
      <Heading headingText="featured stores" />
      <CustomSwiper
        slide={categorySlides}
        perViewMobile={2}
        perViewTablet={3}
        perViewDesktop={5}
        navigationEnabled={true}
      />
    </div>
  );
};

export default LocalStore;
