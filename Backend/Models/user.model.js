const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: { type: String, unique: true },
  password: String,
  userType: { type: String, enum: ["Admin", "customer"], required: true }
    
}, {
    versionKey: false,
    timestamps: true
});

const UserInfo = mongoose.model("user", userSchema);

module.exports = {
  UserInfo
}