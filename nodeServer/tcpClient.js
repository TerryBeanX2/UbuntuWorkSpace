var net = require('net');

const  HOST = 'localhost';
const  PORT = 6666;

var tcpClient = net.Socket();

tcpClient.connect(PORT,HOST,function(){
    console.log('connect success.');
    tcpClient.write('this is tcp client by Node.js');
});

tcpClient.on('data',function(data){
    console.log('server:',data.toString());
});