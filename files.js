const fs = require('fs');

// read from files
// the readFile takes 2 arguments: the relative path to the file and a callback function
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     err ? console.log(err) : console.log(data.toString())
// })

// write to file 
// the writeFile takes 3 arguments: the relative path to the file, the data to be written and a callback function
// fs.writeFile('./docs/blog1.txt', 'put it in the file', () => {
//     console.log("file was written")
// })

// directories
// if(!fs.existsSync('./assets')){ // check if the folder exists
//     fs.mkdir('./assets', (err) => {
//         err ? console.error(err) : console.log("folder was created")
//     })
//     console.log("folder already exists");
// } else {
//     fs.rmdir('./assets', (err) => {
//         err ? console.error(err) : console.log("folder was deleted")
//     })
// }

// deleting file
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         err ? console.error(err) : console.log("file was deleted")
//     })
// }