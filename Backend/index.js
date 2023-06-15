
const express = require('express');

const cors = require('cors');

require('dotenv').config();

const { connection } = require('./Configs/db');
const { styleRouter } = require('./Routes/style.routes');
const { stylistRouter } = require('./Routes/stylist.routes');





const app = express();

app.use(express.json());

app.use(cors());


app.use('/style', styleRouter)

app.use('/stylist', stylistRouter)


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