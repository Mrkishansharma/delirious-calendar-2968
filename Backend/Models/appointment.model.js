

const mongoose = require('mongoose');
const { StyleModel } = require('./style.model');
const { StylisttModel } = require('./stylist.model');

const appointmentSchema = mongoose.Schema({
    date: { type: String },
    time: { type: String },
    stylesID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: StyleModel,
        required: true
    },
    stylistID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: StylisttModel,
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
