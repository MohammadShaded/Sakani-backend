//userRoutes.js
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import upload from '../middlewares/multerMiddlerware.js';
import { registerUser, loginUser, getUserProfile, getAllUsers } from '../controllers/userController.js'
const router = express.Router();


router.get('/', authMiddleware, getAllUsers)
router.post('/register', upload.single("profile_picture"), registerUser);
router.post('/login', loginUser  );
router.get('/:userId', authMiddleware, getUserProfile)


export default router;