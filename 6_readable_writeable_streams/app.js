const fs = require('fs')

// 1:
//const readStream = fs.createReadStream('./example.txt')
// const readStream = fs.createReadStream('./example.txt', 'utf8') // NOTE: add 'utf8' so you can get proper text rather than bytes.
// readStream.on('data', (chunk) => {
//     console.log(chunk)
// })

// 2: COpying file
// const readStream = fs.createReadStream('./example.txt', 'utf8') // NOTE: It is "create"WriteStream and "create"ReadStream
// const writeStream = fs.createWriteStream('./example2.txt') 
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
// })

// 3. Copying large files using PIPE.

// const readStream = fs.createReadStream('./example.txt', 'utf8')
// const writeStream = fs.createWriteStream('./example2.txt')

// readStream.pipe(writeStream)


// 4. Copying and compressing the file:

const zlib = require('zlib')
// const gzip = zlib.createGzip(); 

// const readStream  = fs.createReadStream('./example.txt', 'utf8')
// const writeStream  = fs.createWriteStream('./example.txt.gz')

// readStream.pipe(gzip).pipe(writeStream)

// 5. UNzipping file:

const gunzip = zlib.createGunzip();

const readStreamGz = fs.createReadStream('./example.txt.gz')
const writeStream2  = fs.createWriteStream('./unzipped.example.txt')
readStreamGz.pipe(gunzip).pipe(writeStream2)
