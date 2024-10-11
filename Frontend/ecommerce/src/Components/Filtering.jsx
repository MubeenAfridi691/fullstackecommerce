import React from 'react'
import productCategory from './Productcategory'
function filtering() {
  return (
    <div className='m-auto py-4 w-[1200px]'>
{/* desktop version */}

    <div className='grid grid-cols-[200px_1fr]'>
      {/* left side */}
      <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-x-scroll'>
        <div>
          <h1 className='border-b text-lg'>SORT BY</h1>
          <form className='text-sm p-2' >
            <div  className='flex items-center gap-2'>
              <input type="radio" name="sort" id="sort" />
              <label htmlFor="sort">Price: Low to High</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="radio" name="sort" id="sort1" />
              <label htmlFor="sort1">Price: High to Low</label>
            </div>

          </form>
        </div>
        <div>
          <h1 className='border-b text-lg'>Search By category</h1>
          <form className='text-md py-2' >
            {
              productCategory.map((item)=>{
                return(
                  <div key={item.id} className='flex items-center gap-2'>
                    <input type="radio" name="category" id={item.value} />
                    <label htmlFor={item.value}>{item.label}</label>
                  </div>
                )
              })
            }
            
           

          </form>
        </div>

      </div>
      {/* right side */}
      <div>
        right side
      </div>
      
    </div>

    </div>
  )
}

export default filtering
