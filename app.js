const path = require('path');

const express = require('express');
const csrf = require('csurf');

const db = require('./data/database');
const addCrsfTokenMiddleware = require('./middlewares/csrf-token');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(csrf());

app.use(addCrsfTokenMiddleware);

app.use(authRoutes);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!');
    console.log(error);
  });
