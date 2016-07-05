
console.log("present!")
const routesModel = require('../models/routes')
const router = require('express').Router();

router.get('/',  function(req,res) {
  res.render('index', {user: req.session.user});
});

router.post('/new', function(req,res){
  res.redirect('/');
})


module.exports = router;
