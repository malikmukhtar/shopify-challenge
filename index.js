const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const imageController = require('./controllers/imageController');
require('./models/db');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    defaultLayout: 'mainlayout',
    layoutsDir: __dirname + '/views/layouts',
  })
);
app.set('view engine', 'hbs ');

app.use('/', imageController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at port ${port}...`));
