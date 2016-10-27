console.log("present!")
const { createRoute } = require('../models/routes')
const router = require('express').Router();

router.post('/new', createRoute, function(req,res){
    res.redirect('/')
})

module.exports = router;

