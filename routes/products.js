var express = require('express');
var router = express.Router();

router.get('/products', function(request, response) {
  response.render('products', {});
});

router.get('/products/:id', function(request, response) {
  response.render('product', {});
});

module.exports = router;
