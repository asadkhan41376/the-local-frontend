import CustomSwiper from "@/components/web/customSwiper";

const Banners = () => {
  const bannerSlides = [...Array(2)].map((_, index) => (
    <div className="overflow-hidden rounded-lg cursor-pointer ">
      <div className="bg-[url(/banners/home/banner_1.png)] w-full max-w-full min-h-150 bg-cover bg-center rounded-lg shine_animation hover:scale-102  duration-300"></div>
    </div>
  ));
  return (
    
      <CustomSwiper
        slide={bannerSlides}
        perViewMobile={1}
        perViewTablet={1}
        perViewDesktop={1}
        navigationEnabled={false}
      />
   
  );
};

export default Banners;
