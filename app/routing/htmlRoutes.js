const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  res.redirect('/home.html');
});

router.get('/reservation', (req, res) => {
  res.redirect('/reservation.html');
});

router.get('/tables', (req, res) => {
  res.redirect('/tables.html');
});

router.get('/', (req, res) => {
  res.redirect('/home.html');
});

module.exports = router;