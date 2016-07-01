//receive data from routes.js, parse and send name + lat/long to google maps.

console.log("present!")
const routesModel = require('../models/routes')
const router = require('express').Router();

router.get('/',  function(req,res) {
  // console.log("HERE I AM HERE")
  // console.log(res.filterRoutes[0]['lat-long'])
  res.render('index', {user: req.session.user});
  // console.log(  res.json(res.filterRoutes))
});

module.exports = router;
