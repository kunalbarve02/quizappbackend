const mongoose = require('mongoose');

var ResponseSchema = mongoose.Schema({
    question: {
        type:String,
        trim:true
    },
    A: {
        type:String,
        trim:true
    },
    B: {
        type:String,
        trim:true
    },
    C: {
        type:String,
        trim:true
    },
    D: {
        type:String,
        trim:true
    },
    answer: {
        type:String,
        trim:true
    },
    isMFL: {
        type:Boolean,
        default: false
    },
    testno: {
        type:Number,
        default: 1
    },
    userAnswer: {
        type:String,
        default: ""
    }
})

module.exports = ResponseSchema