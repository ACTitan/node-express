var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Página principal' });
});

router.get('/paginados', function(req, res, next) {
  res.render('index', { title: 'Página dos' });
});

router.get('/paginatres', function(req, res, next) {
  res.render('index', { title: 'Página tres' });
});

router.get('/paginacuatro', function(req, res, next) {
  res.render('index', { title: 'Página cuatro' });
});

module.exports = router;
