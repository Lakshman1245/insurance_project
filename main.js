console.log("Lakshman Ayodhya");

const express = require("express")
const pool = require("./config/dbConnection")
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})