import CustomSwiper from "@/components/web/customSwiper"
import Heading from "@/components/web/heading"
import ProductCard from "@/components/web/productCard"
import products from "@/lib/json/products.json"

const RelatedProducts = () => {

    
      const slide=   products.map((item, index) => (
            <div key={index} className="col-span-6 md:col-span-3   w-full ">
              <ProductCard product={item} />
            </div>
          ))
    
  return (
    <div className="w-[90%]">
        <Heading headingText="Related Products"/>
      <CustomSwiper
    slide={slide}
    perViewDesktop={4}
    perViewMobile={2}
    perViewTablet={3}
      />
    </div>
  )
}

export default RelatedProducts
