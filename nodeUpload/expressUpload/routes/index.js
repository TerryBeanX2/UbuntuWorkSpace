var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

var app = express();

var pub = __dirname + '/public';

app.use(express.static(pub));//设置静态目录为pubic
app.set('views', __dirname.replace('routers','views'));//设置views路径映射到views文件夹

app.set('view engine', 'jade');//设置默认的模板引擎


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

router.post('/file/uploading', function (req, res, next) {
    //生成multiparty对象，配置路径
    var form = new multiparty.Form({uplaodDir: '../public/files'});
    form.parse(req, function (err, fields, files) {
        var filesTmp = JSON.stringify(files, null, 2);
        if (err) {
            console.log('parse error:', err);
        } else {
            console.log('parse files:', filesTmp);
            var inputFile = files.files[0];
            var uploadedPath = inputFile.path;
            var dstPath = '../public/files/' + inputFile.originalFilename;

            //重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function (err) {
                if (err) {
                    console.log('rename error', err);
                    return;
                }
                console.log('rename ok');
                res.header('Access-Control-Allow-Origin','*');
                res.send({
                    code:200,
                    location:'http://'+getLocalIP()+':3000/files/'+inputFile.originalFilename
                })
            });
        }
    })
})


var os = require('os');
function getLocalIP() {
    var map = [];
    var ifaces = os.networkInterfaces();
    console.log(ifaces.ens33[0].address);

    // for (var dev in ifaces) {
    //     if (dev.indexOf('eth0') != -1) {
    //         var tokens = dev.split(':');
    //         var dev2 = null;
    //         if (tokens.length == 2) {
    //             dev2 = 'eth1:' + tokens[1];
    //         } else if (tokens.length == 1) {
    //             dev2 = 'eth1';
    //         }
    //         if (null == ifaces[dev2]) {
    //             continue;
    //         }
    //
    //         // 找到eth0和eth1分别的ip
    //         var ip = null, ip2 = null;
    //         ifaces[dev].forEach(function(details) {
    //             if (details.family == 'IPv4') {
    //                 ip = details.address;
    //             }
    //         });
    //         ifaces[dev2].forEach(function(details) {
    //             if (details.family == 'IPv4') {
    //                 ip2 = details.address;
    //             }
    //         });
    //         if (null == ip || null == ip2) {
    //             continue;
    //         }
    //
    //         // 将记录添加到map中去
    //         if (ip.indexOf('10.') == 0 ||
    //             ip.indexOf('172.') == 0 ||
    //             ip.indexOf('192.') == 0) {
    //             map.push({"intranet_ip" : ip, "internet_ip" : ip2});
    //         } else {
    //             map.push({"intranet_ip" : ip2, "internet_ip" : ip});
    //         }
    //     }
    // }
    return ifaces.ens33[0].address;
}

getLocalIP();



module.exports = router;
