const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to handle POST requests
app.post('/getStarted', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // You can process the received data here or send a response back
  res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});