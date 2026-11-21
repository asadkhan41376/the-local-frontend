import { IoMdStar } from "react-icons/io";

const RatingStar = ({rating}: {rating: number}) => {
  return (
    <div className="flex justify-start items-center">
       { [...Array(5)].map((_,index)=>(

      <IoMdStar key={index} className={ `${index<rating ? "text-yellow-400 " : "text-foreground/60"} font-light`} />
        ))}
    </div>
  )
}

export default RatingStar
