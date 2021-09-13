const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')

const Test = require('../Schema/Models/Test')
const Response = require('../Schema/Models/Response')

router.post('/',async(req, res, next)=>{
    var option = req.body.option
    var id = req.body.id
    var data

    await Response.findByIdAndUpdate(id, { userAnswer: option })
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})

    await Response.find({})
    .then(res=>{data=res
        console.log(res)
    })
    res.status(200).send(data)

})

module.exports = router