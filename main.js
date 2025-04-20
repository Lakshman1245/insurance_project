console.log("Lakshman Ayodhya");

require('dotenv').config();

const express = require("express")
const pool = require("./config/dbConnection")

const app = express();
const port = process.env.port;
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Hello from insurance_project API!');
  });
  

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})