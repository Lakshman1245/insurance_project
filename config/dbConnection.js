const {Pool} = require("pg");
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,                          // default PostgreSQL port
  });
  // Test connection
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('❌ Error connecting to the database', err.stack);
    }
    console.log('✅ Connected to the database');
    release();
  });
  module.exports = pool;


