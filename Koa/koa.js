var koa = require('koa');
var app = koa();
app.keys = ['im a newer secret','i like you'];
app.use(function *(){
    // this.throw(400,'haha stupid');
    this.body = "hello stupid";
    console.log(this.request.query);
    this.cookies.set('name','terry',{
        signed:true
    });
    console.log(this.cookies.get('name'))
});

app.on('error',function(err,ctx){
    log.error('server error',err,ctx)
});

app.listen(3001);