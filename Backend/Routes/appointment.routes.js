const express = require("express");
const { AppointmentModel } = require("../Models/appointment.model");



const appointmentRouter = express.Router();


appointmentRouter.post('/book', async (req, res) => {
    const { date, time, stylistID, status,customerID } = req.body;
    try {

        const data = await AppointmentModel.find({stylistID,date,time})

        if(data){
            res.send('okkkk')
        }

        const style = new AppointmentModel({  date, time, stylistID, status,customerID})
        await style.save();

        return res.send({ message: 'Appointment Booked.', status:"Pending" })

    } catch (error) {
        return res.status(500).send({ message: "Something went wrong", err:error.message });
    }
})

stylistRouter.get("/getstylist", async (req, res) => {
  try {
    const data = await StylisttModel.find();
    console.log(data);
    res.send({
        message:"Stylist Data",
        data : data
    });
  } catch (err) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
});




module.exports = {
    stylistRouter
};