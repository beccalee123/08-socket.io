![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Socket.io

### Author: Becca Lee
some pairing with Hannah Ingham and Heather Cherewaty

### Links and Resources
![Build Status](https://www.travis-ci.com/beccalee123/08-socket.io.svg?branch=master)
* [repo](https://github.com/beccalee123/08-socket.io)
* [travis](https://www.travis-ci.com/beccalee123/08-socket.io)

### Modules
- `app.js` takes in the file provided in the command line
- `server.js` sets up the socket event emitters for read, save, and error
- `logger.js` logs events, creates the alterFile functionality and read/write promises

### Setup
#### `.env` requirements
* `PORT` - 3000 or defined by ENV

#### Running the app
* Open three terminal tabs
* In the following order, in one terminal tab, run `server.js`, in another run `logger.js`, and in the last, run `app.js` and the file you're trying to rewrite. With the current file setup, you would run `app.js ./test.txt`
* After running all three, you should see some console logs in the other terminal tabs, and a new file called `new-file.txt` will be written

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

Testing TBD!

