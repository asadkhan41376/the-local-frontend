import BrandSlider from "@/components/web/brandSlider";
import MyImage from "@/components/web/myImage";

const Banners = () => {
 
  return (
     <div className="overflow-hidden rounded-lg ">
      <div className=" rounded-lg w-full shine_animation hover:scale-102  duration-300  flex items-center justify-start  h-80 relative ">
        <MyImage path="/store_image/store_2.png" fill  className="object-cover"/>
   <div className="w-full md:w-1/3  h-full bg-foreground/50 md:bg-foreground/90 p-8 flex flex-col justify-center items-start gap-2 relative overflow-hidden  ">
  <BrandSlider/>
     <h4 className=" font-heading text-background text-4xl capitalize font-bold ">
      Urban fit Store 
    </h4>
    <p className="text-background/60 font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam veritatis exercitationem deleniti,</p>
   </div>
      </div>
     </div>
    
   
  );
};

export default Banners;
