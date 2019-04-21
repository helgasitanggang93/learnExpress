const router = require('express').Router()
const {Student} = require('../models')

router.get('/', function (req, res) {
    Student.findAll()
    .then(function (data) {
        res.render('./studentView/showDataStudent', {data})
    })
    .catch(function (err) {
        res.send(err)
        
    })
    
})

router.get('/addStudent', function(req,res){
    res.render('./studentView/addDataStudent',{err:null})
})

router.post('/addStudent', function (req, res) {
    let dataStudent = req.body
    Student.create(dataStudent)
    .then(function () {
        res.redirect('/student')
        
    })
    .catch(function (err) {
        res.send(err)
    })
    
})

router.get('/editStudent/:id', function(req, res){
    let id = req.params
    Student.findByPk(id.id)
    .then(function(data){
       res.render('./studentView/editDataStudent', {data})

    })
    .catch(function(err){
       res.send(err)
    })
})

router.post('/editStudent/:id', function(req, res){
    let id = req.params.id
    let dataStudent = req.body
    Student.update(dataStudent, {where:{id:id}})
    .then(function () {
        res.redirect('/student')
        
    })
    .catch(function (err) {
        res.send(err)
        
    })
})

router.get('/deleteStudent/:id', function (req, res) {
   let id = req.params.id
   Student.destroy({where:{id:id}})
   .then(function () {
       res.redirect('/student')
       
   })
   .catch(function (err) {
       res.send(err)
       
   })
    
})
module.exports = router