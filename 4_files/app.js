const fs = require('fs')

// 1:
// fs.writeFile('example.txf', "this is an example.", (error) => {
//     if (error)
//         console.log('err')
//     else
//         console.log('no errror. File successfully saved.')
// })


// 2: writing + reading
// fs.writeFile('example2', 'THis is contents of file example2', (err, file) => {
//     if  (err) {
//         console.log(err)
//     } else {
//         console.log('File successfully created')
//         fs.readFile('example2', 'utf8', (err, file) => {
//             if (err) {
//                 console.log('error: ' + err)
//             } else {
//                 //console.log('read file content:' + file)
//                 console.log(file)
//             }
//         })
//     }
// })

// fs.rename('example2', 'example2.txt', (err) => {
//     if (err)
//         console.log('Problem: ' + JSON.stringify(err))
//     else {
//         console.log('rename was successful.')
//     }
// })

// fs.appendFile('example2.txt', 'Some data being appended', (err) => {
//     if (err) {
//         console.log('Error while appending to the file')
//     } else {
//         console.log('No error')
//     }
// })

// fs.unlink('example2.txt', (err) => {
//     if (err) {
//         console.log("Error while deleting the file")        
//     } else {
//         console.log('FIle successfully deleted')
//     }
// })

