const ProductModel = require('../Model/ProductModel');
 const getCategorywiseProduct = async(req,res)=>{
    const {category}=req.body || req.query
    try{
        const productCategory = await ProductModel.find({category})
        console.log("category",productCategory)
        res.json({
            message : "category product",
            data : productCategory,
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
    
 }

 module.exports = getCategorywiseProduct