'use strict'
const express                  = require('express')
const logger                   = require('morgan')
const bodyParser               = require('body-parser');
const session                  = require('express-session');
const methodOverride           = require('method-override');
const path                     = require('path');

const app                      = express();
const userController           = require('./controllers/user.js')
const homeController           = require('./controllers/home-controller');
const db                       = require('./models/routes.js');
const PORT                     = process.env.PORT || 3000

// Adding session as a middleware
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'ke$ha or die',
  cookie: {maxAge: 60000}
}));

// Adding Method override to allow our form to delete
app.use(methodOverride('_method'));

// set up ejs to render the views
app.set('view engine', 'ejs')

// set up logging so that we can see what's happening
app.use( logger('dev') )
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
})

app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));


app.use('/', homeController);
app.get('/locations', db.searchRoutes, function(req,res){
  res.json(res.filterRoutes)
})
app.use('/user', userController)



