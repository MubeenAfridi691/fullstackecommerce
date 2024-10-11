import React, { useEffect, useState } from 'react'
import simmaryapi from '../Pages/url/Api'
import { Link } from 'react-router-dom'

const Categoryproducts = () => {
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const categoryLoading = new Array(13).fill(null);

    const fetchCategoryProduct = async () => {
        setLoading(true);
        try {
            const response = await fetch(simmaryapi.getallproductshomepage.url);
            const dataResponse = await response.json();
            setCategoryProduct(dataResponse.data);
            // console.log(dataResponse.data);
        } catch (error) {
            console.error('Error fetching category products:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCategoryProduct();
    }, []);

    return (
        <div className="max-w-[1100px] mx-auto p-4">
            <div className="flex items-center gap-4 justify-between overflow-scroll scrollbar-none">
                {loading ? (
                    // Display a loading skeleton or spinner while fetching data
                    categoryLoading.map((_, index) => (
                        <div key={index} className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                    ))
                ) : (
                    categoryProduct.map((product, index) => {
                        const productImage = product?.productImage?.[0]; // Safely access the first image

                        return (
                            <Link to={`categoryproduct/${product.category}`} className="cursor-pointer" key={product?.category}>
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
                                    {productImage ? (
                                        <img
                                            src={product.productImage[0]}
                                            alt={product?.category}
                                            className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
                                        />
                                    ) : (
                                        // Fallback content if no image is available
                                        <p className="text-xs text-gray-500">No image</p>
                                    )}
                                </div>
                                <p className="text-center text-sm md:text-base capitalize">{product?.category}</p>
                            </Link>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Categoryproducts;
