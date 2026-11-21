
"use client"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
const PriceSlider = () => {
    const [value, setValue] = useState([1000])
  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <label htmlFor="slider-demo-temperature">0$</label>
        <span className="text-sm text-muted-foreground">
          {value.join(", ")}$
        </span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={setValue}
        min={0}
        max={1000}
        step={100}
      
      />
    </div>
  )
}


export default PriceSlider
