import React from 'react'
import Categoryproducts from '../Components/Categoryproducts'
import Sliding from '../Components/sliding'
import Horizentalproducts from '../Components/Horizentalproducts'
import VerticalCardProduct from '../Components/VerticalCardProduct'

function Home() {
  return (
    <div>
<Categoryproducts />
<Sliding/>
<Horizentalproducts category={"camera"} heading={'Top Airpords'}/>
<Horizentalproducts category={"mobiles"} heading={'Mobiles'}/>
<VerticalCardProduct category={"mobiles"} heading={'Mobiles'}/>
    </div>
  )
}

export default Home
