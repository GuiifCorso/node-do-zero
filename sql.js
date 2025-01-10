import postgres from 'postgres';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create a database connection
export const sql = postgres(process.env.DATABASE_URL, {
  ssl: 'require', // Ensures SSL is used for Neon connections
});