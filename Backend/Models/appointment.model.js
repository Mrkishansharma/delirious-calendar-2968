

const mongoose = require('mongoose');
const userModel = require('./user.model');
const { StylisttModel } = require('./stylist.model');

const {UserInfo}  = require('./user.model')

const appointmentSchema = mongoose.Schema({
    date: { type: String },
    time: { type: String},
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
    }
}, {
    versionKey: false,
    timestamps: true
});

const AppointmentModel = mongoose.model("style", appointmentSchema);

module.exports = {
    AppointmentModel
}
