const express=require('express');
const router=express.Router();
const {check}=require("express-validator")

const {createUser,loginUser,renewToken}= require("../controllers/authController");
const { validarJWT } = require('../middlewares/validarJwt');

router.post('/new', createUser)

router.post('/', loginUser)

router.get('/renew',validarJWT, renewToken)

module.exports=router