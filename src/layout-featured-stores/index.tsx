import Banners from './banners'
import Categories from './categories'
import StoreSidebarLayout from './store-sidebar-layout'
import Stores from './stores'

const FeaturedStores = () => {
  return (
     <div className="px-2 md:px-10  py-5">
      <Banners />
      <Categories/>
      <StoreSidebarLayout>
        <Stores/>
      </StoreSidebarLayout>
       
     
    </div>
  )
}

export default FeaturedStores
