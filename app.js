'use strict';

const io = require('socket.io-client');
// const socket = io.connect('http://localhost:3000');
// const faker = require('faker');
const fs = require('fs');
const util = require('util');
const events = require('./events.js');

//move to server file
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const file = module.exports = exports = {};

file.loadFile = (file) => readFile(file);

file.saveFile = (file, buffer) => writeFile(file, buffer);

file.convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUpperCase());

file.alterFile = incomingFile => {
  file.loadFile(incomingFile)
    .then(contents => file.convertBuffer(contents))
    .then(buffer => file.saveFile('newfile.txt', buffer))
    .then(() => { events.emit('file-save', incomingFile); return true;})
    .catch(error => events.emit('file-error', error));
};

let files = process.argv.slice(2).shift();
file.alterFile(files);

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