require('dotenv').config();
const mysql = require('mysql2');

// Connect to MySQL DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log('Successfully connected to the ')
);

module.exports = db;