var express = require('express');
var router = express.Router();

const products = [
  {
    id: 1,
    name: 'Skateboard',
    price: '$20.99',
    description: "it's a skateboard"
  },
  {
    id: 2,
    name: 'Skiis',
    price: '$27.99',
    description: 'great at blue mountain'
  },
  {
    id: 3,
    name: 'Snowboard',
    price: '$999.99',
    description: 'perfect for people who hate skiing'
  }
];

router.get('/', function(request, response) {
  response.render('products', {
    title: 'Our Products',
    products: products
  });
});

router.get('/:id', function(request, response) {
  const wantedId = Number(request.params.id);
  const product = products.find(function(prod) {
    return prod.id === wantedId;
  });
  response.render('product', { product: product });
});

module.exports = router;
