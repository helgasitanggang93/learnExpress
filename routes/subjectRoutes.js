const router = require('express').Router()
const {Subject} = require('../models')

router.get('/', function (req, res) {
    Subject.findAll()
    .then(function (data) {
        res.render('./subjectView/showDataSubject', {data})
    })
    .catch(function (err) {
        res.send(err)
        
    })
    
})

router.get('/addSubject', function(req,res){
    res.render('./subjectView/addDataSubject',{err:null})
})

router.post('/addSubject', function (req, res) {
    let dataSubject = req.body
    Subject.create(dataSubject)
    .then(function () {
        res.redirect('/subject')
        
    })
    .catch(function (err) {
        res.send(err)
    })
    
})

router.get('/editSubject/:id', function(req, res){
    let id = req.params
    Subject.findByPk(id.id)
    .then(function(data){
       res.render('./subjectView/editDataSubject', {data})

    })
    .catch(function(err){
       res.send(err)
    })
})

router.post('/editSubject/:id', function(req, res){
    let id = req.params.id
    let dataSubject = req.body
    Subject.update(dataSubject, {where:{id:id}})
    .then(function () {
        res.redirect('/subject')
        
    })
    .catch(function (err) {
        res.send(err)
        
    })
})

router.get('/deleteSubject/:id', function (req, res) {
   let id = req.params.id
   Subject.destroy({where:{id:id}})
   .then(function () {
       res.redirect('/subject')
       
   })
   .catch(function (err) {
       res.send(err)
       
   })
    
})
module.exports = router