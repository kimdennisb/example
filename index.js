const http = require("http");
const url = require('url');
const MongoClient = require('mongodb').MongoClient;

let db; // To store the database connection

// Initialize server
const server = http.createServer((request, response) => {
    console.log(request.url);
    const path = url.parse(request.url, true).pathname;

    if (request.method === 'GET') {
        if (path === '/') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('Hello World!');
            response.end();
        } else if (path === '/welcome') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('Welcome to the landing page');
            response.end();
        } else {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write('Page not found');
            response.end();
        }
    } else {
        response.writeHead(405, { 'Content-Type': 'text/html' });
        response.write('Method not allowed');
        response.end();
    }
});

// Connect to MongoDB
MongoClient.connect("mongodb://localhost:27017/nodepractise", { useUnifiedTopology: true })
    .then(client => {
        db = client.db(); // Store the connected database instance
        console.log("Connected to MongoDB");

        // Start the server after successful database connection
        server.listen(3000, () => {
            console.log("Server is listening on port 3000");
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB", err);
    });
