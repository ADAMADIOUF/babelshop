import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import FirstBanner from '../components/FirstBanner'
import FirstCategories from '../components/FirstCategories'

import LastCategories from '../components/LastCategories'
import Review from '../components/Review'
import SecondCategories from '../components/SecondCategories'
import Slider from '../components/Slider'

const HomePages = () => {
  return (
    <div>
     <Slider/>
     <FirstCategories/>
     <FeaturedProducts/>
     <FirstBanner/>
     <SecondCategories/>
     <Review/>
     <LastCategories/>
    
    </div>
  )
}

export default HomePages