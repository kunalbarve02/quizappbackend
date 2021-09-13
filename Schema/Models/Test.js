const mongoose = require('mongoose')
const QuestionSchema = require('../QuestionSchema')

const Test = mongoose.model('Test', QuestionSchema, 'Test');

module.exports = Test;