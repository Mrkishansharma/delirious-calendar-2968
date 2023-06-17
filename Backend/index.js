
const express = require('express');

const cors = require('cors');

require('dotenv').config();

const { connection } = require('./Configs/db');
const { styleRouter } = require('./Routes/style.routes');
const { stylistRouter } = require('./Routes/stylist.routes');
const userRoutes = require("./Routes/user.routes");
const { appointmentRouter } = require('./Routes/appointment.routes');
const { adminRouter } = require('./Routes/admin.routes');





const app = express();

app.use(express.json());

app.use(cors());

app.use("/user", userRoutes)
app.use('/style', styleRouter)

app.use('/stylist', stylistRouter)

app.use('/appointment', appointmentRouter)

app.use('/admin', adminRouter)


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