const Products= require('../models/products.js');

// get all product
const productList=async (req,res)=>{
    const productId= req.query.productId;
    
    const query=productId ? {_id:productId} : {};
    const pageNo=Number(req.query.pageNo || "");
    const pageSize=Number(req.query.pageSize || "");
    const skip=(pageNo-1)*pageSize;

    const total=await Products.find(query).count();
    const products=await Products.find(query).skip(skip).limit(pageSize);
    res.json({
        status:true,
        total,
        pageNo,
        pageSize,
        products
    })
}



module.exports={
    productList,
}