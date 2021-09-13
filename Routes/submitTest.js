const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')

const Test = require('../Schema/Models/Test')
const Response = require('../Schema/Models/Response')
const TestDetails = require('../Schema/Models/TestDetails')

router.get('/',async(req, res, next)=>{
    
    var data 
    var correctans = 0

    data =await Response.find({})
    .catch(err=>{
        console.log(err)
    })
    
    data.map((response)=>{
        if (response.userAnswer === response.answer)
        {
            correctans++
        }
    })

    await TestDetails.insertMany({
        questionDetails:data,
        correctAnswers:correctans
    })

    console.log(correctans)

    await Response.remove({})
    .catch(error=>{console.log(error)})
    res.status(200).send()
})

module.exports = router