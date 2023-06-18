const express = require("express");
const userrouter = express.Router();
const { UserInfo } = require("../Models/user.model")

const mongoose = require("mongoose");
userrouter.use(express.json());
const cors = require("cors");
userrouter.use(cors());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { passport } = require("../Configs/google.auth");
const { googleAuthentication } = require("../Controllers/user.controller");



// const { passport } = require("../Config/google-oauth")

const JWT_SECRET = "veeresh";






userrouter.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const userType = "customer"

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
    res.send({ status: "User Register Successfully" });
  } catch (error) {
    res.send({ status: "something went wrong", err: error.message });
  }
});



userrouter.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  console.log('--->', req.body);

  try {
    const user = await UserInfo.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "15m",
      });

      // if (res.status(201)) {
      return res.json({ status: "ok", data: token, userID: user._id, userDetails: user });
      // } else {
      // return res.json({ error: "error" });
      // }
    } else {
      return res.json({ status: false, message: "Invalid Password" });

    }
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
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








// google auth


userrouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


userrouter.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', session:false }), googleAuthentication )











module.exports = userrouter;