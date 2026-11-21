import Heading from "@/components/web/heading";
import ProductCard from "@/components/web/productCard";
import products from "@/lib/json/products.json";


const TrendingProducts = () => {
  return (
    <div>
      <Heading headingText="trending products" />
      <div className="grid grid-cols-10 place-items-start gap-4 ">
       

{
    products.map((item, index) => (
        <div key={index} className="col-span-5 md:col-span-2   w-full ">
          <ProductCard product={item} />
        </div>
      ))
}

        
        
      </div>
    </div>
  );
};

export default TrendingProducts;
