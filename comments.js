// Create web server
const express = require('express');
const app = express();
// Create a POST route to handle incoming requests
app.post('/comments', (req, res) => {
  // Log the comment to the console
  console.log(req.body.comment);
  // Respond to the request with a generic JSON object
  res.json({ status: 'OK' });
});
// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});