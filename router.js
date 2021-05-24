const express = require('express');
const router = express.Router();

const { redirectToSlug } = require('./slug');
const { viewController } = require('./viewController');

// Endpoint that gets called via a trigger in Slack
router.post('/tinyurlgenerator', (req, res) => {
  if (req.valid === true) {
    viewController(req, res);
  } else {
    return res.sendStatus(404);
  }
});

router.get('/notfound', (req, res) => {
  res.send('Slug not found');
});

// Redirect route for the slug
router.get('/:id', (req, res) => {
  redirectToSlug(req, res);
});

module.exports = router;
