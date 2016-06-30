// /* set up the Tom Cruise Movie  DB */
'use strict'
const express         = require('express')
const logger          = require('morgan')
const db              = require('./models/routes.js')
const app             = express()
const path            = require('path')
const PORT            = process.env.PORT || 3000
const homeController       = require('./controllers/home-controller');
const userController       = require('./controllers/user');

// set up logging so that we can see what's happening
app.use( logger('dev') )

// set up ejs to render the views
app.set('view engine', 'ejs')

app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
})

app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));


app.use('/', homeController);
// app.use('/user', userController);


