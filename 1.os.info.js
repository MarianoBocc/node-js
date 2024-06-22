// Aqui se puede ver como con un rewuire podemos usar node para
// acceder a la info de por ej el sistema operativo

// const os = require('node:os')
// cuando tenemos un require y este tiene los 3 puntos debajo de la r
// podemos hacer ctrl. y nos da la posibilidad de cambiarlo a
// módulos como se ve a continuación
import { cpus, freemem, totalmem } from 'node:os'

console.log('CPUs', cpus().length)
console.log('memoria libre', freemem() / 1024 / 1024)
console.log('memoria total', totalmem() / 1024 / 1024)
