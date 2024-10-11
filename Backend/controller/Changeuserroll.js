const User = require('../Model/Usermodel')
const changeuserroll = async(req,res)=>{
   
      const {id}=req.body
      const isadmin=req.user.role
      if(isadmin!=='admin'){
        return res.status(401).json({
            success:false,
            message:"You are not authorized to perform this action"
        })
      }
      const {name,email,role,userid}=req.body
      try {
        const user = await User.findById(id)
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        user.name=name
        user.email=email
        user.role=role
        user.userid=userid
        await user.save()
        res.status(200).json({
            success:true,
            message:"User Updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
module.exports=changeuserroll