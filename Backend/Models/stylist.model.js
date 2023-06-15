

const mongoose = require('mongoose');

const stylistSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String, required: true},
    bio: {type: String},
    gender:{type : String}
    
}, {
    versionKey: false,
    timestamps: true
});

const StylisttModel= mongoose.model("stylist", stylistSchema);

module.exports = {
    StylisttModel
}
