const mongoose = require('mongoose')
const QuestionSchema = require('../QuestionSchema')

const Test4 = mongoose.model('Question', QuestionSchema, 'Test4');

module.exports = Test4;