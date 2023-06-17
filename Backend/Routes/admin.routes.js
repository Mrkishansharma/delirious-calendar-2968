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
        res.json({ status: "error", error: "InvAlid Password" });
    }
});

module.exports = {
    adminRouter
}
