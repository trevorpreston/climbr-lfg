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


module.exports = { searchRoutes }



