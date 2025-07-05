const fs = require('fs');

// Sync...
// fs.writeFileSync("./text.txt", "Hello satya....")

// Async...
// fs.writeFile("./text.txt", "Hello World Async", (err) => {})

//Sync...
// const result = fs.readFileSync('contacts.txt', 'utf-8');
// console.log(result);

//Async
// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if(err){
//         console.log('error', err);
//     }else{
//         console.log(result)
//     }
// })

// fs.appendFileSync('./text.txt', 'Hey There\n');

// fs.cpSync('./text.txt', './copy.txt');
// fs.unlink('./copy.txt', (err) => {})
fs.mkdirSync('satya.txt');
