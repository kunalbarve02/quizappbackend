const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()


mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
    })                                                   //Database Connection                              
    .then((res)=>{
        console.log("Database Connection Successful")
    })
    .catch((err)=>{
        console.log(err)
    })

const cors = require("cors")
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const Test1 = require('./Schema/Models/Test1')
const Test2 = require('./Schema/Models/Test1')
const Test3 = require('./Schema/Models/Test1')
const Test4 = require('./Schema/Models/Test1')
const Test = require('./Schema/Models/Test')


app.use(jsonParser); 
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({origin: '*'}))      

const getQuestion = require('./Routes/getQuestions')
const submiTest = require('./Routes/submitTest')
const markForLater = require('./Routes/markForLater')
const unMarkForLater = require('./Routes/unMarkForLater')
const insertAnswer = require('./Routes/insertAnswer')
const getTestDetails = require('./Routes/getTestDetails')

app.use('/getQuestions',getQuestion)
app.use('/submitTest',submiTest)
app.use('/markForLater',markForLater)
app.use('/unMarkForLater',unMarkForLater)
app.use('/insertAnswer',insertAnswer)
app.use('/getTestDetails',getTestDetails)


app.get("/",(req,res)=>{
    res.send("OK")
})


app.listen(process.env.PORT||3001,()=>{
    console.log("Joined Server")
})