"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex flex-col gap-3 mt-2">
      
      <span className="font-medium">Quantity</span>

      <div className="flex items-center px-4 py-2 border">
        <Button
        className=" cursor-pointer"
          variant="ghost"
          size="icon"
          onClick={decrement}
          disabled={quantity === 1}
        >
          <Minus className="h-4 w-4" />
        </Button>

        <span className="w-12 text-center font-semibold">
          {quantity}
        </span>

        <Button
                className=" cursor-pointer"
          variant="ghost"
          size="icon"
          onClick={increment}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductQuantity;