import RatingStar from './ratingStar'
import MyImage from '@/components/web/myImage'

const Reviews = () => {
  return (
    <div className='w-full flex flex-col justify-start items-start gap-5 '>
        <div className="grid grid-cols-12 gap-3 w-full border border-gray-300 p-2 ">
<div className="md:col-span-3 col-span-12 w-full flex justify-center items-center h-full">
    <MyImage path="/" className=" border" />
    </div>
<div className="md:col-span-9 col-span-12 w-full">
    <div className="flex justify-between items-center">
        <span className="text-foreground/60 font-medium font-body text-md">January 5, 2021</span>
        <span><RatingStar rating={4} /></span>
    </div>
    <h4 className="text-xl text-foreground font-heading font-bold ">Furion</h4>
    <p className="text-md font-body text-foreground font-light mt-2">Donec id consectetur neque. Aenean eleifend arcu id bibendum posuere.</p>
</div>
          
        </div>


        <div className="w-full ">
                <h4 className="text-xl text-center  text-foreground font-heading font-bold ">Add a review</h4>

                <div className="w-full flex flex-col justify-start items-start gap-3 mt-5">
                    <div className="w-full flex justify-start items-center gap-3">
                        <span className="text-md text-foreground font-body font-medium">Your Rating</span>
                        <RatingStar rating={0} />
                    </div>
                    <textarea placeholder='Write your review here...' className='w-full border border-gray-300  p-2 text-md text-foreground font-body font-light' rows={5}></textarea>
                    <button className='bg-primary text-white px-4 py-2 rounded-lg text-md font-body font-medium'>Submit Review</button>
                </div>

        </div>
      
    </div>
  )
}

export default Reviews
