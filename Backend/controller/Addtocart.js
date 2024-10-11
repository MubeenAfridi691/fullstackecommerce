const Cartproduct = require('../Model/Cartproduct')

// const addtocart = async (req, res) => {
//     const { productid, userid } = req.body;
    
//     try {
//         const isproductavailable = await Cartproduct.findOne({ productid });
        
//         if (isproductavailable) {
//             // Return here to prevent further execution
//             return res.status(200).json({ message: "Product already in cart" });
//         }


//         const payload = {
//             userid,
//             productid,
//             quantity: 1
//         };
        
//         const cart = new Cartproduct(payload);
//         await cart.save(); // Save the product

//         // If the product is successfully saved, send the success message
//         return res.status(200).json({ message: "Product added to cart" });
        
//     } catch (error) {
//         // Handle errors appropriately
//         return res.status(400).json({ message: "Error adding product to cart" });
//     }
// };

const addtocart = async(req,res)=>{
    try{
        const { productId } = req?.body
        const currentUser = req.userId

        const isProductAvailable = await Cartproduct.findOne({ productId })

        console.log("isProductAvailabl   ",isProductAvailable)

        if(isProductAvailable){
            return res.json({
                message : "Already exits in Add to cart",
                success : false,
                error : true
            })
        }

        const payload  = {
            productId : productId,
            quantity : 1,
            userId : currentUser,
        }

        const newAddToCart = new Cartproduct(payload)
        const saveProduct = await newAddToCart.save()


        return res.json({
            data : saveProduct,
            message : "Product Added in Cart",
            success : true,
            error : false
        })
        

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

    

module.exports = addtocart;
