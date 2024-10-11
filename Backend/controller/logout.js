


const logout=async(req,res)=>{
   try {
    res.clearCookie('token')
    res.status(200).json({msg:"User logged out successfully"})
    
    
   } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Server error"})
    
   }
}

module.exports=logout