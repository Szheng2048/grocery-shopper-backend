const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    itemName:{
        type: String,
    },
    purchased:{
        type: Boolean,
        default: false,
    },
    date:{
        type:Date,
        default:()=> Date.now()
    }
})

module.exports = mongoose.model("product",productSchema)