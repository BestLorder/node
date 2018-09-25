const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

let home=new Router();
home.get('/A',async(ctx)=>{
    ctx.body='A';
}).get('/B',async(ctx)=>{
    ctx.body='B';
})

// 父级路由
let router=new Router();
router.use('/home',home.routes(),home.allowedMethods())

// 路由装载
app
    .use(router.routes())
    .use(router.allowedMethods());//判断是否get

app.listen('3000', () => {
    console.log('start')
})