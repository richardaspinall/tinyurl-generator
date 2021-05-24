require('dotenv').config();
const express = require('express');
const router = require('./router');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', router);
const mongoose = require('mongoose');

mongoose.connect(process.env.DBCONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log('Server has started');
});
