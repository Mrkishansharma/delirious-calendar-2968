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

adminRouter.patch("/updateRole/:userID", async (req, res) => {
    try {
        const {userID} = req.params
        const user = await UserInfo.findById({_id:userID});
        if(user.email=='admin@stylesync.com'){
            return res.send({msg:"You are not able to change the role of super admin"})
        }
        user.userType = user.Type=='Admin' ? "customer" : "Admin"
        await user.save()
        res.send({msg:"User Role is Successfully Changed"})
    } catch (error) {
        res.json({ msg: "Something went wrong", error: error.message });
    }
});

module.exports = {
    adminRouter
}
