const express = require("express");
const { AppointmentModel } = require("../Models/appointment.model");



const appointmentRouter = express.Router();


appointmentRouter.post('/book', async (req, res) => {
    let { date, time, stylistID, status,customerID, name, image, service } = req.body;

    console.log('------->', req.body);


    status = "Pending"

    try {

        const data = await AppointmentModel.find({stylistID,date,time})
        console.log('o===>', data)
        if(data.length){
          for(let i=0; i<data.length; i++){
            // console.log(data[i].status)
            if(data[i].status == 'Confirm' || data[i].status == 'Pending' ){
              return res.status(400).send({
                message : "On this time This Stylist is not Available "
              })
            }
          }
        }

        const style = new AppointmentModel({  date, time, stylistID, status,customerID, name, image, service})
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
   // console.log(data);
    res.send({
        message:"All Appointments",
        data : data
    });
  } catch (err) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
});

appointmentRouter.patch("/cancel/:appointmnetId", async (req, res) => {
  try {
    const {appointmnetId}  = req.params
    const data = await AppointmentModel.findById({_id:appointmnetId});
    console.log(data);
    if(data){
      data.status = 'Cancel'
      await data.save()
      return res.status(200).send({
        message:"Appoointment has been canceled successfully"
      })
    }else{
      return res.send({
          message:"Appointments Not Found"
      });
    }
  } catch (err) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
});

appointmentRouter.patch("/reject/:appointmnetId", async (req, res) => {
  try {
    const {appointmnetId}  = req.params
    const data = await AppointmentModel.findById({_id:appointmnetId});
    console.log(data);
    if(data){
      data.status = 'Reject'
      await data.save()
      return res.status(200).send({
        message:"Appoointment has been Rejected successfully"
      })
    }else{
      return res.send({
          message:"Appointments Not Found"
      });
    }
  } catch (err) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
});

appointmentRouter.patch("/confirm/:appointmnetId", async (req, res) => {
  try {
    const {appointmnetId}  = req.params
    const data = await AppointmentModel.findById({_id:appointmnetId});
    console.log(data);
    if(data){
      data.status = 'Confirm'
      await data.save()
      return res.status(200).send({
        message:"Appoointment has been Confirmed successfully"
      })
    }else{
      return res.send({
          message:"Appointments Not Found"
      });
    }
  } catch (err) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
});




module.exports = {
  appointmentRouter
};