// helloServer.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end('Welcome to Home Page');
    } else if (req.url === '/about') {
        res.end('This is About Page');
    } else if (req.url === '/contact') {
        res.end('Contact us at contact@example.com');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});