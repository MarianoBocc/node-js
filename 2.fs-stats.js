// aqui se aprende el file sistem

const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')
//el .statSync quiere decir q va a ejecutar los console.log de manera sincrona
//es decir en ese orden de declaración

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)