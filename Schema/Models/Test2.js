const mongoose = require('mongoose')
const QuestionSchema = require('../QuestionSchema')

const Test2 = mongoose.model('Question', QuestionSchema, 'Test2');

module.exports = Test2;