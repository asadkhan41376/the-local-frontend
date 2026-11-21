import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

type props ={
  item:string[]
}
const ToggleTabs = ({item}:props) => {
  return (
    <ToggleGroup type="multiple" className="flex w-full" >
      {
        item.map((item)=>(

          <ToggleGroupItem key={item} className="flex-1 w-full border cursor-pointer" value={item}>{item}</ToggleGroupItem>
        ))
      }
</ToggleGroup>
  )
}

export default ToggleTabs
