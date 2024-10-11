import React from 'react'
import simmaryapi from '../Pages/url/Api'
import { toast } from 'react-toastify'

const addToCart = async(e,id) =>{
  e?.stopPropagation()
  e?.preventDefault()

  const response = await fetch(simmaryapi.addtocart.url,{
      method : simmaryapi.addtocart.method,

      credentials : 'include',
      headers : {
          "content-type" : 'application/json'
      },
      body : JSON.stringify(
          { productId : id ,
            
          }
      )
  })

  const responseData = await response.json()

  if(responseData.success){
      toast.success(responseData.message)
  }

  if(responseData.error){
      toast.error(responseData.message)
  }


  return responseData

}

   


  export default addToCart