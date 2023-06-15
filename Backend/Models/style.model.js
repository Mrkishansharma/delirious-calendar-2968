

const mongoose = require('mongoose');

const styleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    gender: {
        type: String,
        enum : ["Male", "Female"],
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
    
}, {
    versionKey: false,
    timestamps: true
});

const StyleModel = mongoose.model("style", styleSchema);

module.exports = {
    StyleModel
}
