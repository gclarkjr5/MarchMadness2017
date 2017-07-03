`use strict`

const express = require(`express`);
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.port || 8000;

const csvWork = require(`./csvWork`)

app.use(`/`, express.static(`public`));

app.get(`/`, (req, res) => {
    res.send('Hello World')
});

io.on('connection', function (socket) {
    // console.log('a user connected');
    socket.on(`disconnect`, () => {
        // console.log(`a user disconnected`)
    });
    csvWork(data => {
        // console.log(data)
        socket.emit(`data`, data)
    });
});

http.listen(port);

