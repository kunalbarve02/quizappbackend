const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')

const Test = require('../Schema/Models/Test')
const Response = require('../Schema/Models/Response')

router.get('/',async(req, res, next)=>{
    id=req.query.id
    console.log(id);
    let data
    await Response.findByIdAndUpdate(id,{ isMFL:false })
    .then(doc=>{
        console.log(doc)
    })
    .catch(err=>{
        console.log(err)
    })
    await Response.find({})
    .then(res=>{data=res})
    res.status(200).send(data)
})

module.exports = router