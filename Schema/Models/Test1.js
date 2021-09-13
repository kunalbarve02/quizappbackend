const mongoose = require('mongoose')
const QuestionSchema = require('../QuestionSchema')

const Test1 = mongoose.model('Question', QuestionSchema, 'Test1');

module.exports = Test1;