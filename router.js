const express = require('express');
const router = express.Router();

const { redirectToURL } = require('./slug');
const { viewController } = require('./viewController');

router.post('/new', (req, res) => {
  if (req.valid === true) {
    viewController(req, res);
  } else {
    return res.sendStatus(404);
  }
});

router.get('/:id', (req, res) => {
  redirectToURL(req, res);
});

module.exports = router;
