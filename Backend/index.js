
const express = require('express');

const cors = require('cors');

require('dotenv').config();

const { connection } = require('./Configs/db');





const app = express();

app.use(express.json());

app.use(cors());


const Port = process.env.Port || 7500;

app.listen(Port, async (req,res)=>{

    try {

        await connection;

        console.log(`DB connected. `);

    } catch (error) {

        console.log(error);

    }

    console.log(`server is running on port ${Port}`);
    
})