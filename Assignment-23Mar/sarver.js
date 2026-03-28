const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Route handling
    if (req.url === "/") {
        res.write("Welcome to Home Page");
    } 
    else if (req.url === "/about") {
        res.write("This is About Page");
    } 
    else if (req.url === "/contact") {
        res.write("Contact us at: contact@example.com");
    } 
    else {
        res.write("404 - Page Not Found");
    }

    res.end();
});

// Server listen
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});