//ASYNC-AWAIT PARALELO
//Aquí se leen los dos archivos a la vez y después ejecuta
// esta es una manera más eficiente ya q no hay tiempos muertos

import { readFile } from 'node:fs/promises'
Promise.all([
    readFile('./archivo.txt', 'utf-8') ,
    readFile('./archivo2.txt', 'utf-8') 
]).then (([text, text2]) =>{
    console.log('primer texto:',text)
    console.log('segundo texto:',text2)
})
