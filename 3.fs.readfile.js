//////// de forma síncrona

const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')

//el segundo parámetro de la func readFileSync hace q devuelva 
// lo q queremos en un formato legible

console.log(text)

console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(secondText)

//////// de forma asíncrona


console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{
    console.log('primer texto:',text)
})


//el segundo parámetro de la func readFile hace q devuelva 
// lo q queremos en un formato legible.

//el tercer parámetro es un callBack
// un callBack es una función q se ejecuta cuando se 
// completa una tarea asíncrona

console.log('hacer cosas mientras lees el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text)=>{
    console.log('segundo texto:',text)
})