import ProductCard from "@/components/web/productCard";
import products from "@/lib/json/products.json";
import PriceComboBox from '@/components/shadcn/priceComboBox';
import DrawerButtons from "./drawerButtons";
const Stores = () => {
  return (
    
    <>
    {/* for desktop ================== */}
    <div className='hidden col-span-12 w-full md:flex justify-between items-center '>
      <div>
        <h4 className='text-2xl font-heading font-bold '>Store Products </h4>
        <span className='font-body leading-0.5 text-md font-medium  text-foreground/50'>Showing 1-2 of 125 products</span>
      </div>
      <PriceComboBox/>
     
    </div>
    {/* for mobile ================= */}
    <div className='md:hidden col-span-12 w-full flex justify-between items-center '>
     <DrawerButtons/>
    
        
    </div>
    {
        products.map((item, index) => (
            <div key={index} className="col-span-6 md:col-span-3   w-full ">
              <ProductCard product={item} />
            </div>
          ))
    }
    </>
  )
}

export default Stores
