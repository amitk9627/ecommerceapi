const express = require('express');
const router =new express.Router();

const {registerUser,loginUser,logoutUser} = require('../controller/users.js')

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser);

module.exports=router;