const express = require("express");
const { StylisttModel } = require("../Models/stylist.model");


const stylistRouter = express.Router();


stylistRouter.post('/addstylist', async (req, res) => {
    const { name, image, gender,bio } = req.body;
    try {
        const style = new StylisttModel({  name, image, gender,bio })
        await style.save();

        return res.send({ message: 'Stlist Added Successfully' })

    } catch (error) {
        return res.status(500).send({ message: "Something went wrong", err:err.message });
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