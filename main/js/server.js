const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const cors = require('koa-cors');
const app = new koa();
app.use(require('koa-static')('.'));

app.use(bodyParser({
    multipart: true,
    urlencoded: true
}));
app.use(cors());

router.post('/getScreenshot', function *(next){        
   let data=this.request.body;
   if(!data||!data.url){
       this.body="No required data";
       return;
   }
   let r=yield getScreenshot(data);;
   this.body=r;
});

app.use(router.routes());
app.listen(4123);