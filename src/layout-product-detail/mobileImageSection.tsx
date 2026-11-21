import CustomSwiper from "@/components/web/customSwiper";
import MyImage from "@/components/web/myImage";
import product from "@/lib/json/products.json";
const MobileImageSection = () => {

     const slide = product[0].images.map((image, index) => (
  <MyImage
    key={index}
    path={image}
    width={700}
    height={700}
    className="w-full h-auto object-cover"
  />
));
  return (
    <div>

<CustomSwiper
slide={slide}
perViewMobile={1}
/>

      
    </div>
  )
}

export default MobileImageSection
