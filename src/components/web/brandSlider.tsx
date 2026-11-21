const quotesLines =[ "Wear confidence, not just clothes.","Where style meets identity.","Wear your vibe."]

const duplicate =[...quotesLines,...quotesLines]
const BrandSlider = () => {
  return (
     <div className=" absolute top-0 left-0 border-b  overflow-hidden p-1">
<div className="flex  whitespace-nowrap gap-4 brandSlider  ">
  {
    duplicate.map((quote,index)=>(
        <span className="text-background font-body" key={index}>{quote}</span>
    ))
  }
</div>
   </div>
  )
}

export default BrandSlider
