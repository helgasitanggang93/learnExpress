const router = require('express').Router()
const {Teacher} = require('../models')

router.get('/', function (req, res) {
    Teacher.findAll()
    .then(function (data) {
        res.render('./teacherView/showTeacher', {data})
    })
    .catch(function (err) {
        res.send(err)
        
    })
    
})
router.get('/addTeacher', function(req,res){
    res.render('./teacherView/addDataTeacher',{err:null})
})
router.post('/addTeacher', function (req, res) {
    let dataTeacher = req.body
    Teacher.create(dataTeacher)
    .then(function () {
        res.redirect('/teacher')
        
    })
    .catch(function (err) {
        res.send(err)
    })
    
})

router.get('/editTeacher/:id', function(req, res){
    let id = req.params
    Teacher.findByPk(id.id)
    .then(function(data){
       res.render('./teacherView/editDataTeacher', {data})

    })
    .catch(function(err){
       res.send(err)
    })
})

router.post('/editTeacher/:id', function(req, res){
    let id = req.params.id
    let dataTeacher = req.body
    Teacher.update(dataTeacher, {where:{id:id}})
    .then(function () {
        res.redirect('/teacher')
        
    })
    .catch(function (err) {
        res.send(err)
        
    })
})

router.get('/deleteTeacher/:id', function (req, res) {
   let id = req.params.id
   Teacher.destroy({where:{id:id}})
   .then(function () {
       res.redirect('/teacher')
       
   })
   .catch(function (err) {
       res.send(err)
       
   })
    
})







module.exports = router