const mongoose = require('mongoose')

const CartproductSchema = new mongoose.Schema({
    userid:{
        type:String
        
        
    },
    productid:{
        type:String,
       
        
    },
    
    quantity:{
        type:Number,
        
    }
    
})

const cartmodel = mongoose.model('cartModel', CartproductSchema);
module.exports = cartmodel 