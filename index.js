// TODO: Require needed node modules
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');

// Declare an app variable
const app = express();

// Set the view engine
app.set('view engine', 'ejs');

// TODO: Middleware, etc
app.use(cors());
app.use(expressEjsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));

// Declare controllers
app.use('/museums', require('./controllers/museums'));
app.use('/pieces', require('./controllers/pieces'));

// Make home route
app.get('/', (req, res) => {
  res.render('home');
});

// TODO: Listen
app.listen(process.env.PORT || 3000, () => {
	console.log('API is up and running!')
})

