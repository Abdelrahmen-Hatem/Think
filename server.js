const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the root directory and dist directory
app.use(express.static('.'));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve 404.html for any other routes
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});