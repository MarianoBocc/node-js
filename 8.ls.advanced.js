//SISTEMA DE MÓDULOS

const fs = require('node:fs/promises')   
const path = require('node:path')

//PROCESS
const folder = process.argv[2] ?? '.'


//ASINCRONÍA SECUENCIAL
async function ls (folder){
  let files  
  try{
    files = await fs.readdir(folder)
  } catch{
    console.error(`No se puede leer el directorio ${folder}`)
    process.exit(1)  
  }


  //ASINCRONÍA EN PARALELO
  const filesPromises = files.map(async file =>{
    const filePath = path.join(folder, file)
    let fileStats

    try{
        stats = await fs.stat(filePath)
    } catch{
        console.error(`No se pudo leer el archivo ${filePath}`)
        process.exit(1)                                           //Si hay un error sale del proceso
    }
//COMO UTILIZAR EL FILE SISTEM
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
  })
  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder)