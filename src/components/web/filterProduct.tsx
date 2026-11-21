"use client";

import products from "@/lib/json/products.json";
import ProductCard from "./productCard";
import categories from "@/lib/json/category.json";
import { useState } from "react";
const FilterProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <>
      <div className="flex gap-4 flex-wrap     justify-center items-center pb-5">
        
        {categories.map((category) => (
          <span
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex-1   text-center text-background border border-foreground  px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-all duration-300 ease-in-out capitalize ${selectedCategory === category.name ? "bg-foreground text-background" : "text-foreground bg-transparent"}`}
          >
            {category.name}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-10 place-items-start gap-4 ">
        {products
          .filter(
            (item) =>
              selectedCategory === "all" || item.category === selectedCategory,
          )
          .map((item) => (
             <div key={item.id} className="col-span-5 md:col-span-2   w-full ">
              <ProductCard product={item} />
            </div>
          ))}
      </div>
    </>
  );
};

export default FilterProduct;
