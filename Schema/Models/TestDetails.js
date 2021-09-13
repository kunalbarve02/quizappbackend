const mongoose = require('mongoose')
const TestDetailsScema = require('../TestDetailsSchema')

const TestDetails = mongoose.model('TestDetails', TestDetailsScema);

module.exports = TestDetails;