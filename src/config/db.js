import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // MySQL host
  user: process.env.DB_USER,      // MySQL username
  password: process.env.DB_PASS,  // MySQL password
  database: process.env.DB_NAME   // MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

export default connection;
