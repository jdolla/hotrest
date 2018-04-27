const express = require('express');
const router = express.Router();
const tables = require('../data/data');


router.get('/api/tables', (req, res) => {
  res.json(tables);
  // res.end('hello');
});

module.exports = router;