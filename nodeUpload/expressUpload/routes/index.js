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
                    location:'http://172.16.216.50:3000/files/'+inputFile.originalFilename
                })
            });
        }
    })
})

module.exports = router;
