
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware for parsing JSON and form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve HTML file with the registration form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/reg.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    // Extract data from the submitted form
    const { name, usn, email, semester, branch } = req.body;
    
    // Display the submitted details on the terminal
    console.log('New registration details:');
    console.log(`Name: ${name}`);
    console.log(`USN: ${usn}`);
    console.log(`Email: ${email}`);
    console.log(`Semester: ${semester}`);
    console.log(`Branch: ${branch}`);
    
    // Respond to the client
    res.send('Registration successful! Check the terminal for details.');
  });
  

// Handle form submission


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
