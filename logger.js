'use strict';

const io = require('socket.io-client');
const util = require('util');
const fs = require('fs');

const socket = io.connect('http://localhost:3000');

socket.on('read', alterFile);
socket.on('save', saveCallback);
socket.on('error', errorCallback);

/**
 *
 *
 * @param {*} file
 */
function saveCallback(file){
  console.log('file-saved');
}

/**
 *
 *
 * @param {*} file
 */
function errorCallback(file){
  console.log('error-logged');
}

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
/**
 *
 *
 * @param {*} buffer
 * @returns
 */
const toUpper = (buffer) => { return Buffer.from(buffer.toString().toUpperCase()); };

/**
 *
 *
 * @param {*} file
 */
function alterFile(file) {
  console.log('alterFile called');
  readFile(file)
    .then((text) => { return toUpper(text); })
    .then((text) => { writeFile('new-file.txt', text); })
    .then(() => {
      console.log(`${file} file saved`);
      socket.emit('file-saved', file);
    })
    .catch((err) => {
      console.log('error', err);
      socket.emit('file-error', file);
    });
}
