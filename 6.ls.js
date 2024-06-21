//LS sirve para ver directorios y de esa forma poder acceder a los
// paths de manera de copiarlos sin errores

const fs = require('node:fs')
fs.readdir('.', (err, files) =>{
    if(err){
        console.error('Error al leer el directorio: ', err)
        return;
    }

    files.forEach(file =>{
        console.log(file)
    })
})