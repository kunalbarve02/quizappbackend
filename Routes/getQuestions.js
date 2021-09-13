const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')

const Test = require('../Schema/Models/Test')
const Response = require('../Schema/Models/Response')

router.get('/',async(req, res, next)=>{
    let testName = req.query.testName
    console.log(testName)
    var que= await Response.find({})
    switch(testName)
    {
        case 'fullStackWebDev':
            if(que.length > 0)
            {
                console.log("in if")
                await Response.find({})
                .populate("question")
                .then((doc)=>{
                    return res.status(201).send(doc)
                })
            }
            else
            {
                console.log("in else")
                que = await Test.find({ testno:1 })
                que.map(async(q,index)=>{
                    await Response.insertMany(q)
                    .catch(error=>{console.log(error)})
                })
                return res.status(200).send(que)
            }
            break
        case 'prodBased':
            if(que.length > 0)
            {
                console.log("in response")
                await Response.find({})
                .populate("question")
                .then((doc)=>{
                    return res.status(201).send(doc)
                })
            }
            else
            {
                que = await Test.find({ testno:2 })
                await Response.remove({})
                .catch(error=>{console.log(error)})
                que.map(async(q,index)=>{
                    await Response.insertMany(q)
                    .catch(error=>{console.log(error)})
                })
                return res.status(200).send(que)
            }
            break
        case 'serviceBased':
            if(que.length > 0)
            {
                console.log("in if")
                await Response.find({})
                .populate("question")
                .then((doc)=>{
                    return res.status(201).send(doc)
                })
            }
            else
            {
                console.log("in else")
                que = await Test.find({ testno:3 })
                que.map(async(q,index)=>{
                    await Response.insertMany(q)
                    .catch(error=>{console.log(error)})
                })
                return res.status(200).send(que)
            }
            break
        case 'generalAwareness':
            if(que.length > 0)
            {
                console.log("in if")
                await Response.find({})
                .populate("question")
                .then((doc)=>{
                    return res.status(201).send(doc)
                })
            }
            else
            {
                console.log("in else")
                que = await Test.find({ testno:4 })
                que.map(async(q,index)=>{
                    await Response.insertMany(q)
                    .catch(error=>{console.log(error)})
                })
                return res.status(200).send(que)
            }
            break
        default:
            return res.status(404).send()
            break
    }
})

module.exports = router