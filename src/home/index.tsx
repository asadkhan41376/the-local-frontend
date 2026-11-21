import LocalStore from "./localStore"
import Banners from "./banners"
import TrendingProducts from "./trendingProducts"
import ShopByCategory from "./shopByCategory"

const HomeLayout = () => {
  return (
    <div className="px-2 md:px-10 py-5">
      <Banners/>
      <LocalStore/>
      <TrendingProducts/>
      <ShopByCategory/>
    </div>
  )
}

export default HomeLayout
