console.log("present!")
const { createRoute } = require('../models/routes')
const router = require('express').Router();

// router.get('/',  function(req,res) {
//   res.render('index', {user: req.session.user});
// });
// router.get('/new', createRoute, function(req,res) {
//   console.log("LOOK AT ME" + req.body.createName)
//   res.redirect('/')
// });

// router.get('/',  function(req,res) {
//   res.render('index', {user: req.session.user});
// });


router.post('/new', createRoute, function(req,res){
    res.redirect('/')
})

module.exports = router;
