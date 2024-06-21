// OBJETO PROCESS es un objeto global que proporciona info y

console.log(process.argv)   // este método nos fa los argumentos del proceso q se está ejecutando


//control sobre el proceso actual y su salida 

process.exit(0)   // todo salió bien

process.exit(1)   // algo salió mal

//controla eventos del proceso

process.on('exit', ()=>{
    //limpiar los recursos
})


// current working directory
console.log(process.cwd())  
// nos dice desde donde estamos ejecutando el proceso. 
//No la carpeta de origen sino desde donde se ejecuta.

// ENV variables de entorno

console.log(process.env)