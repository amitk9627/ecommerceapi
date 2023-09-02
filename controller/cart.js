const Carts = require('../models/cart.js');

const getCart = async (req, res) => {
    //    console.log(req.user);
    try {
        const cart = await Carts.find({userId:req.user._id}).populate('productId');
        res.json({
            status: true,
            cart,
        })
    } catch (err) {
        res.status(404).json({
            status: false,
            message: "something worng"
        })
    }
}
const addCart = async (req, res) => {
    // console.log(req.user);
    const { productId } = req.body;
    const newCart = {
        productId: productId,
        userId: req.user._id
    }
    const result = await Carts.create(newCart);
    res.json({
        status: true,
        result

    });
}
// const searchCart=async (req,res)=>{
//     const cartId=req.query.cartId;
//     console.log(cartId);
//     const cart = await Carts.find({_id:cartId})
//     res.json({
//         status:true,
//         cart
//     })
// }
const deleteCart=async (req,res)=>{
   const id=req.body.id;
    const deletecart= await Carts.deleteOne({_id:id});
    res.json({
        status:true,
        deletecart
    })
}
module.exports = {
    addCart, getCart,deleteCart,
}