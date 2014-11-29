var express = require('express'),
    app = express();

app.use(express.static(__dirname, '/'));

app.get('/customers/:id', function (request, response) {
  var customerId = parseInt(request.params.id);
  var data = {};

  customers.forEach(function (customer) {
    if (customer.id === customerId) {
      data = customer;
    }
  });

  response.json(data);
});

app.get('/customers', function (request, response) {
  response.json(customers);
});

app.listen(8080);

console.log('Express listening on port 8080');

var customers = [
  {
    id: 1,
    joined: '2000-12-02',
    name: 'John',
    city: 'Chandler',
    orderTotal: 9.9956,
    orders: [
      { id: 1, product: 'Shoes', total: 9.9956 }
    ]
  },
  {
    id: 2,
    joined: '1965-01-25',
    name: 'Zed',
    city: 'Las Vegas',
    orderTotal: 19.99,
    orders: [
      { id: 2, product: 'Book', total: 19.99 }
    ]
  }
];
