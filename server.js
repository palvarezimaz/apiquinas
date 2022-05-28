const express = require('express');
let quotes = require('./quotes');

const app = express();
// const port = 3000;

// app.listen(proces.env.PORT || 8080, () =>
//   console.log(`server listening to port: ${8080}`)
// );

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

app.listen(proces.env.PORT || 3000, () =>
  console.log(`server listening to port: ${3000}`)
);
