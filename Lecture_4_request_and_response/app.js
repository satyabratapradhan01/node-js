const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.write('<html>')
    res.write('<body><h1>Like / Share / subscribe</h1></body>')
    res.write('</html>')
    res.end();
})

const PORT = 8080;

server.listen(PORT, (req, res) => {
    console.log(`Server running at http://localhost:${PORT}`);
})