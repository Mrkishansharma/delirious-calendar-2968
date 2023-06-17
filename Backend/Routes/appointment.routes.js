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

appointmentRouter.get("/get/:userID", async (req, res) => {
  try {
    const data = await AppointmentModel.find({customerID : req.params.userID});
    console.log(data);
    res.send({
        message:"Your Appointment",
        data : data
    });
  } catch (err) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
});

appointmentRouter.get("/getall", async (req, res) => {
  try {
    const data = await AppointmentModel.find();
    console.log(data);
    res.send({
        message:"All Appointments",
        data : data
    });
  } catch (err) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
});




module.exports = {
  appointmentRouter
};