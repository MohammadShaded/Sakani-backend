//userRoutes.js
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import upload from '../middlewares/multerMiddlerware.js';
import { registerUser, loginUser } from '../controllers/userController.js'
const router = express.Router();


router.post('/register', upload.single("profile_picture"), registerUser);
router.post('/login', loginUser  );




export default router;