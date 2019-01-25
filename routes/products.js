var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.render('products', {});
});

router.get('/:id', function(request, response) {
  response.render('product', {});
});

module.exports = router;
