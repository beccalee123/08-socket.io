'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');


let file = process.argv.slice(2).shift();

socket.emit('file', file);

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };