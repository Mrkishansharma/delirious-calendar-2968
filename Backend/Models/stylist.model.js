

const mongoose = require('mongoose');

const stylistSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String},
    bio: {type: String},
    gender:{type : String},
    rating:{type:Number},
    speciality1:{type:String},
    speciality2:{type:String},
    speciality3:{type:String}
    
}, {
    versionKey: false,
    timestamps: true
});

const StylisttModel= mongoose.model("stylist", stylistSchema);

module.exports = {
    StylisttModel
}
