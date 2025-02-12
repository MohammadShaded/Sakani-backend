import { createUser, getUserByEmail } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import uuid4 from "uuid4";
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    try {
        const { full_name, email, password, phone, role } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const profile_picture = req.file ? req.file.filename : null; // Get uploaded file name\
        const user_id = uuid4();
            
        const user = await getUserByEmail(email, password);
        if (user) return res.status(401).json({message: 'this email is already in use'});

        await createUser({ user_id,full_name, email, password, phone, role, profile_picture, hashedPassword });

        res.status(201).json({ message: "user registered successfully" })
    } catch (err) {
        res.status(500).json({ message: "server error", err })
    };


};

export const loginUser = async (req, res) => {
    try {
    const {email, password} = req.body;

    const result = await getUserByEmail(email, password);
    if (!result) return res.status(401).json({message: 'Invalid email'});
    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({message: 'Invalid password'});

    const token =jwt.sign(
        {id: user.user_id, role: user.role},
        process.env.JWT_SECRET,
        {expiresIn: '10h'}
    )

    res.json({
        message: 'login successful',
        token,
        user: {
            id: user.id,
            full_name: user.full_name,
            email: user.email,
            role: user.role,
            profile_picture: user.profile_picture
        },
    });
} catch(error){
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
}
}