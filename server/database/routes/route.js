import express from  'express';
import { UserSignUp } from '../controller/usercontroller.js';
import { UserLogIn } from '../controller/usercontroller.js';

const router=express.Router();

router.post('/signup',UserSignUp);
router.post('/login',UserLogIn);

export default router;