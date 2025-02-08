//userRoutes.js
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import upload from '../middlewares/multerMiddleware';
import { registerUser } from '../controllers/userController'
const router = express.Router();


router.get('/register', upload.single("profile_picture"), registerUser);





export default router;