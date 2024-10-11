const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenverify = (req, res, next) => {
    const token = req.cookies.token 
    if (!token) {
        return res.status(401).json({ msg: 'user not logged in' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: 'Token is not valid' });
        }
        // console.log(decoded);
        req.user = decoded;
        // console.log(req.user);
        req.userid = decoded.id;
        // console.log('id',req.userid);
    });


    next();
    // console.log(token);
   
    

}


module.exports = tokenverify;