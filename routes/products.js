const express = require('express');
const router =new express.Router();
const {productList} =require('../controller/products.js');

router.get('/list',productList);
router.get('/list:productId',productList);

module.exports=router