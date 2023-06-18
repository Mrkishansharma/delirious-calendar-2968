const express = require("express");
const adminRouter = express.Router();
const { UserInfo } = require("../Models/user.model")

const mongoose = require("mongoose");
const cors = require("cors");
adminRouter.use(cors());


adminRouter.get("/alluser", async (req, res) => {
    try {
        const user = await UserInfo.find();
        res.send({msg:"all users", data:user})
    } catch (error) {
        res.json({ status: "error", error: error.message });
    }
})


adminRouter.get("/getone/:userID", async (req, res) => {
    try {
        const {userID} = req.params
        const user = await UserInfo.findById({_id:userID});
        res.send({msg:"userInfo", data:user})
    } catch (error) {
        res.json({ status: "error", error: error.message });
    }
});

module.exports = {
    adminRouter
}
