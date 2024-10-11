const ProductModel = require('../Model/ProductModel');

const ProductDetails=async(req,res)=>{

    const {productId}=req.body || req.query
    try {
        const product=await ProductModel.findById(productId)
        if(!product){
            return res.status(400).json({
                message : "product not found",
                error : true,
                success : false
            })
        }
        res.json({
           
            data : product
            
        })
        
    } catch (error) {
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
        
    }

}
module.exports = ProductDetails