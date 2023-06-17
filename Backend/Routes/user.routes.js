const express = require("express");
const userrouter = express.Router();
const {UserInfo} =require("../Models/user.model")

const mongoose = require("mongoose");
userrouter.use(express.json());
const cors = require("cors");
userrouter.use(cors());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET="styleSync";



userrouter.post("/register", async (req, res) => {
    const { fname, lname, email, password, userType } = req.body;
  
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
      const oldUser = await UserInfo.findOne({ email });
  
      if (oldUser) {
        return res.json({ error: "User Exists" });
      }
      await UserInfo.create({
        fname,
        lname,
        email,
        password: encryptedPassword,
        userType,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });



  userrouter.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await UserInfo.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "15m",
      });
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });


  userrouter.post("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;
  
    const oldUser = await UserInfo.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      const encryptedPassword = await bcrypt.hash(password, 10);
      await User.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: encryptedPassword,
          },
        }
      );
  
      res.render("index", { email: verify.email, status: "verified" });
    } catch (error) {
      console.log(error);
      res.json({ status: "Something Went Wrong" });
    }
  });



  

module.exports = userrouter;