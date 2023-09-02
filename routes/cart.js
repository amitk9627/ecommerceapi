const express= require('express');
const router=express.Router();
const {addCart,getCart,deleteCart,searchCart}=require("../controller/cart");

router.get('/getCart',getCart);
router.post('/addCart',addCart);
router.delete('/delete:id',deleteCart)
// router.get('/searchCart:cartId',searchCart)

module.exports=router;