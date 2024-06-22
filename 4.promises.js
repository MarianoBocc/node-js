// PROMESAS node funciona con promises así de esta forma evitamos
// hacer un call back y funciona exactamente de la misma manera
// de forma nativa

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('hacer cosas mientras lees el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })
