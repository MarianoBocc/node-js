const net = require('node:net')

// Esta función permite tener siempre un puerto disponible y manejar los errores en caso de q no se dé
function findAvailablePort (desirePort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desirePort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADORINUSE') {
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
