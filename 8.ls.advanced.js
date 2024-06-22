/* eslint-disable no-undef */
// SISTEMA DE MÓDULOS

const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors') // Esta extensión da color a los mensajes de consola para una mejor identificación

// PROCESS
const folder = process.argv[2] ?? '.'

// ASINCRONÍA SECUENCIAL
async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`No se puede leer el directorio ${folder}`))
    process.exit(1)
  }

  // ASINCRONÍA EN PARALELO
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)

    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(pc.red(`No se pudo leer el archivo ${filePath}`))
      process.exit(1) // Si hay un error sale del proceso
    }
    // COMO UTILIZAR EL FILE SISTEM
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize).toString().padStart(10)} ${pc.yellow(fileModified)}`
  })
  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder)
