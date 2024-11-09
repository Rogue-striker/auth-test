const express = require('express');

// Initialize Express
const app = express();

app.use(express.json());
// Create GET request
app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

app.get('/auth', (req, res) => {
  console.log(req.query);
  res.send('ok');
});

const port = process.env.port || 5000;
// Initialize server
app.listen(port, () => {
  console.log('Running on port 5000.');
});
