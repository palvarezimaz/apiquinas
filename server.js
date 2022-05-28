const express = require('express');
let quotes = require('./quotes');

const app = express();
const port = 8080;

app.listen(proces.env.PORT || port, () =>
  console.log(`server listening to port: ${port}`)
);

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to APIQUINAS</h1>
    <p>Talk to our API by using "/apiquinas/quote"</p>
  `);
});

app.get('/apiquinas/quotes', (req, res) => {
  res.json(quotes);
});
