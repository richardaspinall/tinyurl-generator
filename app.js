require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const verifySignature = require('./verifySignature');

const app = express();

// Middleware which verifies Slack requests and adds flag to req
app.use(
  express.urlencoded({
    extended: true,
    verify: verifySignature,
  })
);

app.use('/', router);

mongoose.connect(process.env.DBCONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log('Server has started');
});
