const http = require (`http`)

let PORT = 5000

console.log(http)
http
  .createServer((request, response) => response.end(`<HTML><h2>Hello Node</h2></HTML>`))
  .listen(PORT)
console.log(`Server is running at http://127.0.0.1:${PORT}`)