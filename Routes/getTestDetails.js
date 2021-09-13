const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')

const Test = require('../Schema/Models/Test')
const Response = require('../Schema/Models/Response')
const TestDetails = require('../Schema/Models/TestDetails')

router.get('/',async(req, res, next)=>{

    TestDetails.find({})
    .sort({createdAt:-1})
    .then((doc) => {
        console.log(doc)
        res.send(doc[0])
    })
})

module.exports = router