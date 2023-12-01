var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

var app = express(); 
var indexRouter = require('./routes/routes');
const PORT = 8000 ;

app.use(cors());
app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else { 
    console.log(`Server running in PORT ${PORT}`);
  }
})

module.exports = app;
