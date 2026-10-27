const http = require('http');

const server = http.createServer((req, res) => {

    // Set header to HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.write(`
            <html>
                <head>
                    <title>Home</title>
                </head>
                <body>
                    <h1>Home Page.</h1>
                </body>
            </html>
        `);
    } 
    else if (req.url === '/about') {
        res.write(`
            <html>
                <head>
                    <title>About</title>
                </head>
                <body>
                    <h1>About Page.</h1>
                </body>
            </html>
        `);
    } 
    else if (req.url === '/contact') {
        res.write(`
            <html>
                <head>
                    <title>Contact</title>
                </head>
                <body>
                    <h1>Contact Page.</h1>
                </body>
            </html>
        `);
    } 
    else {
        res.write(`
            <html>
                <body>
                    <h1>Invalid Request!</h1>
                </body>
            </html>
        `);
    }

    res.end();
});

// Listen on port 5000
server.listen(5000, () => {
    console.log('The NodeJS server on port 5000 is now running….');
});