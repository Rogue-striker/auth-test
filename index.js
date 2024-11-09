const express = require('express');

// Initialize Express
const app = express();

// Create GET request
app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

app.get('/auth', (req, res) => {
  console.log(req.params);
  res.send('ok');
});

const port = process.env.port || 5000;
// Initialize server
app.listen(port, () => {
  console.log('Running on port 5000.');
});
