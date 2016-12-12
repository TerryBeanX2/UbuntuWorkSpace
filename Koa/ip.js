var os = require('os');
function getLocalIP() {
    var ifaces = os.networkInterfaces();
    console.log(ifaces.ens33[0].address);
    return ifaces.ens33[0].address;
}
module.exports = getLocalIP;