
// Import the express and path modules.

const express = require('express');
const path = require('path');

// creates an instance of an Express application, which is then used to define routes and middleware.

const app = express();

// Checks if there's a port specified in the environment variables and if not, defaults to port 3000.

const PORT = process.env.PORT || 3000;

// Middleware to serve static files
// The express.static() middleware function to serve static files.
// The path.join(__dirname, 'public') specifies the directory from which to serve the static

app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
// When a GET request is made to the root URL, the Express server responds by sending the index.html file located in the public directory using the res.sendFile() method.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
// app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));


// Start server and bind to 0.0.0.0 to allow external access
app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on http://0.0.0.0:${PORT}`));
