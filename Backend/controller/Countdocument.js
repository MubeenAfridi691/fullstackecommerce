const Cartproduct = require('../Model/Cartproduct')

const countdocument = async(req,res)=>{
    const {id }= req.body
    try {
        const count = await Cartproduct.countDocuments({userid:id})
        return res.status(200).json({
            message : "Count Document",
            success : true,
            count : count
        })
        
    } catch (error) {
        return res.status(400).json({
            message : "Error in Count Document",
            success : false,
            error : true
        })

        
    }
   
}


module.exports = countdocument