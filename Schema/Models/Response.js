const mongoose = require('mongoose')
const ResponseSchema = require('../ResponseSchema')

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;