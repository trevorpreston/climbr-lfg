const MongoClient  = require('mongodb').MongoClient
const dbConnection = 'mongodb://localhost:27017/test'

console.log('model connected!')
//get requested routes from db to home-controller.js
module.exports = {
  searchRoutes: function(req, res, next){
    const filterObj={}
    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err
      db.collection('routes')
        .find(filterObj)
        .toArray(function(err, data){
          if(err) throw err
          res.filterRoutes = data
          next()
        })
      // console.log(db.collection('routes'))
    })
  }



}


