const {Pool} = require("pg");

const pool = new Pool({
    user: 'postgres',       // usually "postgres"
    host: 'localhost',
    database: 'insurance_project',
    password: 'Worldwar@3',
    port: 5432,                           // default PostgreSQL port
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


