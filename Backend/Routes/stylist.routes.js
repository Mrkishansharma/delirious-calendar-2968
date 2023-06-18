const express = require("express");
const { StylisttModel } = require("../Models/stylist.model");


const stylistRouter = express.Router();


stylistRouter.post('/addstylist', async (req, res) => {
    const { name, image, gender,bio,speciality1,speciality2, speciality3,rating } = req.body;
    try {
        const style = new StylisttModel({  name, image, gender,bio,speciality1,speciality2, speciality3,rating })
        await style.save();

        return res.send({ message: 'Stlist Added Successfully' })

    } catch (error) {
        return res.status(500).send({ message: "Something went wrong", err:error.message });
    }
})

stylistRouter.get("/getstylist", async (req, res) => {
  try {
    const data = await StylisttModel.find();
    //console.log(data);
    res.send({
        message:"Stylist Data",
        data : data
    });
  } catch (err) {
    console.log("err");
    console.log({ message: "Something went wrong", err:error.message });
  }
});


stylistRouter.delete("/delete/:id",async(req,res)=>{
  try {
    const {id}=req.params
 
    await StylisttModel.findByIdAndDelete({_id:id})
    res.send({msg:"Stylist deleted"})
  } catch (error) {
    console.log("err");
    console.log({ message: "Something went wrong", err:error.message });
  }
  
   
  
})


stylistRouter.get("/service",async(req,res)=>{
  try {
    let {q}=req.query
    const services=await StylisttModel.find({$or: [
      { speciality1: q },
      { speciality2: q },
      { speciality3: q }
    ]})
    res.send(services)
  } catch (error) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
 
})

stylistRouter.get("/rating",async(req,res)=>{
  try {
    let {q}=req.query
    const stars=await StylisttModel.find({rating:q})
    res.send(stars)
  } catch (error) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
 
})


stylistRouter.get("/search",async(req,res)=>{
  try {
    let {q}=req.query
    const stylist=await StylisttModel.find({name:{$regex:q,$options:'i'}})
    res.send(stylist)
  } catch (error) {
    console.log("err");
    console.log({ message: "Something went wrong", err:err.message });
  }
  
})

module.exports = {
    stylistRouter
};