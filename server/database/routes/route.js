import express from  'express';
import { UserSignUp } from '../controller/usercontroller.js';
import { UserLogIn } from '../controller/usercontroller.js';
import { getProducts } from '../controller/productController.js';
import { getProductById } from '../controller/productController.js';

const router=express.Router();

router.post('/signup',UserSignUp);
router.post('/login',UserLogIn);
router.get('/products',getProducts);
router.get('/product/:id',getProductById);

export default router;