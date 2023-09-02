const jwt = require("jsonwebtoken");
const secretKey='yeAmitKaKeyHai';
const Users=require("../models/users.js");
// security check
// 1 extract jwt token from header
// 2 validate the expiry of jwt token
// 3 validate the jwt token is correct

const authMiddleware =async (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            success:false,
            message:"token is missing"
        })
    }
    const validateToken=jwt.verify(token,secretKey);
    // console.log(validateToken)
    const decodeToken=jwt.decode(token);
    // console.log(decodeToken);
    const now=Math.floor( Date.now()/1000);
   
    const expriryTime=decodeToken.exp;

    if(now>expriryTime){
        return res.status(401).json({
            success:false,
            message:"expriry session"
        })
    }
    const user=await Users.findById(decodeToken._id);
    // console.log(user);
    if(!user.token || user.token!==token){
        return res.status(401).json({
            success:false,
            message:"please login to access this resource"
        })
    }
    req.user=user; //current logged data
    next();
}
module.exports=authMiddleware