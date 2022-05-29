const express = require('express');
let quotes = require('./views/quotes-list');

const app = express();
// const port = 3000;

// app.listen(proces.env.PORT || 8080, () =>
//   console.log(`server listening to port: ${8080}`)
// );

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/quotes', (req, res) => {
  const quote = req.query;
  res.render('quotes', {
    quote: quotes,
  });
});

app.get('/apiquinas/all-quotes', (req, res) => {
  res.json(quotes);
});

app.get('/apiquinas/one-quote', (req, res) => {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomQuote]);
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`server listening to port: ${3000}`)
);
