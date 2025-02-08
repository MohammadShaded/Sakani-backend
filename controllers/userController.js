import { createUser } from "../models/userModel";
import bcrypt from "bcryptjs";


export const registerUser = async (req, res) => {
    try {
        const { full_name, email, password, phone, role } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const profile_picture = req.file ? req.file.filename : null; // Get uploaded file name\

        await createUser({ full_name, email, password, phone, role, profile_picture, hashedPassword });

        res.status(201).json({ message: "user registered successfully" })
    } catch (err) {
        res.status(500).json({ message: "server error", err })
    };


};