const MongoClient  = require('mongodb').MongoClient
const dbConnection = 'mongodb://localhost:27017/test'

console.log('model connected!')

function searchRoutes(req, res, next){
    const filterObj={}
    let filteredLocations=[]
    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err
      db.collection('routes')
        .find(filterObj)
        .toArray(function(err, data){
          if(err) throw err
          res.filterRoutes = data
          next()
        })
    })
}

function createRoute(req, res, next){
    MongoClient.connect(dbConnection, function(err, db) {
      console.log("THIS IS REQ.BODY.NAME"+req.body.createName)
      let routeInfo = {
        name: req.body.createName,
        'lat-long': JSON.parse('['+req.body.createLatLong + ']'),
        type: req.body.createType,
        'difficulty-rating': req.body.createDifficulty,
        'info': req.body.createSummary,
        'submitted-by': req.body.createContributor
      }
      db.collection('routes').insert(routeInfo, function(err, result) {
        console.log("THIS IS ROUTE INFO.NAME"+ routeInfo.name)
        if(err) throw err;
        next();
      })
    })

}


function createUser(req, res, next) {
  createSecure( req.body.email, req.body.password, saveUser)
  function saveUser(email, hash) {
    MongoClient.connect(dbConnection, function(err, db) {
      let userInfo = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: email,
        passwordDigest: hash
      }
      db.collection('users').insertOne(userInfo, function(err, result) {
        if(err) throw err;
        next();
      });
    });
  }
}


module.exports = { searchRoutes, createRoute }



