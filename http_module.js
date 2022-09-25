const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Main Page")
    } else if (req.url === '/about'){
        res.end('About Page')
    } else {
        res.end(`
        <h1>PAGE NOT FOUND!</h1>
        <a href='/'>Go Back</a>
    `)
    }
})

server.listen(3001)