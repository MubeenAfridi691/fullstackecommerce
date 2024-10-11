import React from 'react'
import { useParams } from 'react-router-dom'

function Categorydetails() {
    const {category} = useParams();
  return (
    <div>
        {
            category
            ?
            <h1>
                {category}
            </h1>
            :
            <h1>
                No category
            </h1>
        }
      
    </div>
  )
}

export default Categorydetails
