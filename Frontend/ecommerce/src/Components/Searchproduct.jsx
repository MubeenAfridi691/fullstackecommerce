import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import simmaryapi from '../../src/Pages/url/Api'
import VerticalCard from '../Components/verticalCard'

const Searchproduct = () => {
    const query = useLocation()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)


    // console.log("query bow",query.search?.split('=')[1])

    const fetchProduct = async()=>{
        setLoading(true)
        const response = await fetch('http://localhost:5000/searchproduct'+query.search)
        const dataResponse = await response.json()
        setLoading(false)

        setData(dataResponse.data)
        console.log('response',dataResponse)
    }

    useEffect(()=>{
        fetchProduct()
    },[query])

  return (
    <div className='container mx-auto p-4'>
      {
        loading && (
          <p className='text-lg text-center'>Loading ...</p>
        )
      }
 
      <p className='text-lg font-semibold my-3'>Search Results : {data.length}</p>

      {
        data.length === 0 && !loading && (
           <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
        )
      }


      {
        data.length !==0 && !loading && (
          <VerticalCard loading={ loading} data={data}/>
        )
      }

    </div>
  )
}

export default Searchproduct