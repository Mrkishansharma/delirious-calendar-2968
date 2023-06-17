

const mongoose = require('mongoose');
const userModel = require('./user.model');
const { StylisttModel } = require('./stylist.model');

const {UserInfo}  = require('./user.model')

const appointmentSchema = mongoose.Schema({
    date: { type: String },
    time: { type: String, enum: ["11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"]},
    stylistID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: StylisttModel,
        required: true
    },
    status : {type : String, enum: ["Pending", "Cancel", "Reject", "Confirm"], default:"Pending"},
    customerID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserInfo",
        required: true
    },
    name:{type:String},
    image:{type:String},
    service:{type:String}
}, {
    versionKey: false,
    timestamps: true
});

const AppointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = {
    AppointmentModel
}
