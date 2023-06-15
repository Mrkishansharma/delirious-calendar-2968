const express = require("express");
const { StyleModel } = require("../Models/style.model");


const styleRouter = express.Router();


styleRouter.post('/createstyle', async (req, res) => {
    const { name, image,price, gender,description } = req.body;
    try {
        const style = new StyleModel({ name, image,price, gender,description })
        await style.save();

        return res.send({ message: 'Style Created Successfully' })

    } catch (error) {
        return res.status(500).send({ message: "Something went wrong", err:err.message });
    }
})

styleRouter.get("/getstyles", async (req, res) => {
  try {
    const data = await StyleModel.find();
    console.log(data);
    res.send({
        message:"Styles Data",
        data : data
    });
  } catch (err) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
});



styleRouter.get("/male", async (req, res) => {
  try {
    let data = await StyleModel.aggregate([{ $match: { gender: "Male" } }]);
    res.status(200).send({
        message:"Styles Data",
        data : data
    });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong", err:err.message });
  }
});

styleRouter.get("/female", async (req, res) => {
  try {
    let data = await StyleModel.aggregate([{ $match: { gender: "Female" } }]);
    res.status(200).send({
        message:"Styles Data",
        data : data
    });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong", err:err.message });
  }
});


module.exports = {
  styleRouter
};