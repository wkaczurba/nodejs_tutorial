// 1. SImple reponse at http://localhost:3000
// const http = require('http')

// const server = http.createServer( (req, res) => {
//     res.write('Hello world from nodejs')
//     res.end();
// })

// server.listen(3000);


// 2: More advanced req/res
// const http = require('http')
// const server = http.createServer( (req, res) => {

//     if (req.url === '/') {
//         res.write('Hello world from nodejs')
//         res.end()
//     } else {
//         res.write('Hello from: ' + req.url)
//         res.end()
//     }
// })
// server.listen(3000)


// 3. Sending static files / responses:
const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {

    // THis serves an HTML file.:
    // const readStream = fs.createReadStream('./static/index.html');
    // res.writeHead(200, {'Content-type': 'text/html'})
    // readStream.pipe(res)

    // const readStream = fs.createReadStream('./pedro.json');
    // res.writeHead(200, {'Content-type': 'application/json'})
    // readStream.pipe(res)

    // PNG:
    const readStream = fs.createReadStream('./file.png');
    res.writeHead(200, {'Content-type': 'image/png'})
    readStream.pipe(res)


}).listen(3000);