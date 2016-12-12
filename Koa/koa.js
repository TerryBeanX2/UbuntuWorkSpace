var koa = require('koa');
var app = koa();
var ip = require('./ip');
app.keys = ['im a newer secret','i like you'];
app.use(function *(){
    // this.throw(400,'haha stupid');
    console.log(this.request.path);
    this.body = "hello stupid";
    this.cookies.set('name','terry',{
        signed:true
    });
    console.log(this.cookies.get('name'))
});

app.listen(3001);

ip();