const express = require('express')
const app = express()
const port =  process.env.PORT ||3000
const teacherRouter = require('./routes/teacherRoutes')
const studentRouter = require('./routes/studentRoutes')
const subjectRouter = require('./routes/subjectRoutes')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine','ejs') 
app.use('/teacher', teacherRouter)
app.use('/student', studentRouter)
app.use('/subject', subjectRouter)
app.listen(port, function () {
    console.log(`Listening port ${port}`);
    
})