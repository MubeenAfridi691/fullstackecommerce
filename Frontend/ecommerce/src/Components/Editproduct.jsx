import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import productCategory from './Productcategory';
import uploadImage from './uploadimage';
import FullImage from './FullImage';
import { toast } from 'react-toastify';
import simmaryapi from '../Pages/url/Api';
import { useSelector } from 'react-redux';

function Editproduct({ item, seteditproduct }) {
  const user = useSelector((state) => state.user);
  console.log(item);

  const [data, setData] = useState({
    id: item._id,
    productName: item.productName,
    brandName: item.brandName,
    category: item.category,
    productImage: item.productImage,
    description: item.description,
    price: item.price,
    sellingPrice: item.sellingPrice
  });
  
  const [fullimage, setfullimage] = useState('');
  const [openscreen, setopenscreen] = useState(false);

  const updateproducts = async (e) => {
    e.preventDefault();

    try {
      const updateproduct = await fetch('http://localhost:5000/updateproduct', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      });
      const res = await updateproduct.json();
      console.log(res);
      toast.success('Product Updated Successfully');
      seteditproduct(false);
      // Optionally reload the page or close the edit modal
      // window.location.reload(); // Uncomment if needed
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const handleimage = (e) => {
    const file = e.target.files[0];
    uploadImage(file)
      .then((res) => {
        setData((prev) => ({
          ...prev,
          productImage: [...prev.productImage, res.url]
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletehandler = (index) => {
    const newarr = data.productImage.filter((_, i) => i !== index);
    setData({
      ...data,
      productImage: newarr
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <div className='w-full h-full z-50 top-0 bottom-0 left-0 right-0 fixed bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='w-1/2 min-h-[80%] h-full relative mt-5 bg-white p-5'>
        <ImCross className='absolute right-0 cursor-pointer mr-5 top-4' onClick={() => seteditproduct(false)} />
        <h1 className='text-bold text-2xl'>Upload Products</h1>
        <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5' onSubmit={updateproducts}>
          <label htmlFor='productName'>Product Name :</label>
          <input
            type='text'
            id='productName'
            placeholder='Enter Product Name'
            name='productName'
            value={data.productName}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='brandName' className='mt-3'>Brand Name :</label>
          <input
            type='text'
            id='brandName'
            placeholder='Enter Brand Name'
            value={data.brandName}
            name='brandName'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='category' className='mt-3'>Category :</label>
          <select onChange={handleOnChange} required name='category' value={data.category} className='p-2 bg-slate-100 border rounded'>
            <option value="">Select Category</option>
            {
              productCategory.map((item) => (
                <option key={item.id} value={item.value}>{item.label}</option>
              ))
            }
          </select>

          <label htmlFor='productImage' className='mt-3'>Product Image :</label>
          <label htmlFor='uploadImageInput'>
            <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
              <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                <span className='text-4xl'><FaCloudUploadAlt /></span>
                <p className='text-sm'>Upload Product Image</p>
                <input onChange={handleimage} type='file' id='uploadImageInput' className='hidden' />
              </div>
            </div>
          </label>

          <div className='flex justify-between items-center group'>
            {
              data?.productImage?.map((item, index) => (
                <div key={index} className='flex justify-between items-center relative'>
                  <div className='flex m-3 rounded-md overflow-hidden'>
                    <img onClick={() => { setopenscreen(true); setfullimage(item); }} width={100} height={100} src={item} alt="" className='flex object-cover cursor-pointer' />
                    <div onClick={() => deletehandler(index)} className='absolute top-5 right-10 bg-black bg-opacity-50'>
                      <MdDelete className='text-red-500 absolute text-2xl cursor-pointer' />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <label htmlFor='price' className='mt-3'>Price :</label>
          <input
            type='number'
            id='price'
            placeholder='Enter Price'
            value={data.price}
            name='price'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='sellingPrice' className='mt-3'>Selling Price :</label>
          <input
            type='number'
            id='sellingPrice'
            placeholder='Enter Selling Price'
            value={data.sellingPrice}
            name='sellingPrice'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='description' className='mt-3'>Description :</label>
          <textarea
            className='h-28 bg-slate-100 border resize-none p-1'
            placeholder='Enter Product Description'
            rows={3}
            onChange={handleOnChange}
            name='description'
            value={data.description}
          >
          </textarea>

          <button type="submit" className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>Update Product</button>
        </form>
        {openscreen && <FullImage fullimage={fullimage} setopenscreen={setopenscreen} />}
      </div>
    </div>
  );
}

export default Editproduct;
