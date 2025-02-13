import pool from '../config/db.js';

export const createUser = async (userData) => {
    const { user_id, full_name, email, hashedPassword, phone, role, profile_picture } = userData;
    const query = `
    INSERT INTO users (user_id, full_name, email, password, phone, role, profile_picture)
    VALUES (?,?,?,?,?,?,?)
    `;
    const values = [user_id, full_name, email, hashedPassword, phone, role, profile_picture];
    console.log(userData);
    const [result] = await pool.execute(query, values);
    return result;
}

export const getUserByEmail = async (email)=>{
    const query = `SELECT * FROM users WHERE email =?`;
    const [result] = await pool.execute(query, [email]);
    return result;
}

export const getUserById = async (userId) => {
    const query = `SELECT * FROM users WHERE user_id = ?`;
    const [result]  = await pool.execute(query, [userId]);
    return result;
}