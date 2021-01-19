const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const imageController = require('./controllers/imageController');
require('./models/db');

const app = express();

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views'));
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    defaultLayout: 'mainlayout',
    layoutsDir: __dirname + '/views/layouts',
  })
);
app.set('view engine', 'hbs');

const port = process.env.PORT || 3009;
app.listen(port, () => console.log(`Listening at port ${port}...`));

app.use('/', imageController);
