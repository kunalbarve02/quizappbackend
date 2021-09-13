const mongoose = require('mongoose')
const QuestionSchema = require('../QuestionSchema')

const Test3 = mongoose.model('Question', QuestionSchema, 'Test3');

module.exports = Test3;