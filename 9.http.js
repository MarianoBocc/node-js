const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

// De la siguiente manera siempre el server va a tomar un puerto libre y va a
// consologuear cual es.
// el formato de la dirección http permite q sea clickable

// server.listen(0, () => {
//   console.log(`Server listening on port  http://localhost:${server.address().port}`)
// })
