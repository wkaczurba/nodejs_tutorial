const fs = require('fs')

// 1:
// fs.mkdir('new_dir', (err) => {
//     if (err) { 
//         console.log('error while creating a folder')
//     } else {
//         console.log('folder sucessfully created')
//         fs.rmdir('new_dir', (err) => {
//             if (err)
//                 console.log('Error while deleting the folder')
//             else
//                 console.log('Folder succsesully deleted')
//         })
//     }
// })

// 2:  create folder + file within it.
// fs.mkdir('tutorial', (err) => {
//     if (err) { 
//         console.log('error while creating a folder')
//     } else {
//         fs.writeFile('./tutorial/new_file.txt', 'some contents', err => {
//             if (err) 
//                 console.log('error while creating a file tutorial/new_file.txt')
//             else {
//                 console.log('file successfully created.')
//             }
//         })
//     }
// })

// 3: trying to delete non-empty folder: - WILL FAIL , so need to delete the file first...
// fs.unlink('./tutorial/new_file.txt', (err) => {
//     if (err) 
//         console.log('Error while deleting file tutorial/new_file.txt' + err)
//     else {
//         fs.rmdir('tutorial', err => {
//             if (err)
//                 console.log('err:  ' + JSON.stringify(err))
//             else 
//                 console.log('all ok.')
//         })
//     }
// })

// Reading directory;
fs.readdir('folder', (err, files) => {
    if (err)
        console.log(err)
    else {
        for (let file of files) { // NOTE: THIs syntax.
            file = 'folder/' + file;
            fs.unlink(file, err => {
                if (err) {
                    console.log(`Error while deleting ${file}`)
                } else {
                    console.log(`Deleted ${file}`)
                }
            })
        }
        fs.rmdir('folder', (err) => {
            if (err) {  
                console.log('Error while delting folder.');
            } else {    
                console.log('Directory successfully removed.')
            }
        })
        console.log(files);
    }
})

// 4: Deleting folder containing multiple files:

