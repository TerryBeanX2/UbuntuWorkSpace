var net = require('net');

const PORT = 6666;
const HOST = 'localhost';

var clientHandler = function (socket) {
    console.log('a person connected');

    socket.on('data', function dataHandler(data) {
        console.log(socket.remoteAddress, socket.remotePort, 'send', data.toString());
        socket.write('server received\n');
    });

    socket.on('close', function () {
        console.log(socket.remoteAddress, socket.remotePort, 'disconnected');
    })
};

var app = net.createServer(clientHandler);

app.listen(PORT, HOST);
console.log('tcp server is running on tcp://', HOST, ':', PORT);