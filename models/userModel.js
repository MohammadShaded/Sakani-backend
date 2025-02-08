import pool from '../config/db.js';

export const createUser = async (userData) => {
    const { user_id, full_name, email, hashedPassword, phone, role, profile_picture } = userData;
    const query = `
    INSERT INTO users (user_id, full_name, email, password, phone, role, profile_picture)
    VALUES (?,?,?,?,?,?,?)
    `;
    const values = [user_id, full_name, email, hashedPassword, phone, role, profile_picture];
    const [result] = await pool.execute(query, values);
    return result;
}