import Link from 'next/link'
import {HeadingTypes} from '../../types/types'
const Heading = ({ headingText, className }: HeadingTypes) => {
  return (
    <div className='flex justify-between items-center pt-10 pb-5'>
      <h1 className={`${className} text-lg md:text-2xl font-heading capitalize font-bold  text-foreground tracking-tighter`}>{headingText}</h1>


      <Link className='text-lg font-heading capitalize font-medium  text-foreground tracking-tighter' href=""> view all</Link>
    </div>
  )
}

export default Heading
