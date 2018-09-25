const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
    prefix:'/jspang'
});

router
    .get('/', (ctx, next) => {
        ctx.body = 'Hello Lorder';
    })
    .get('/todo', (ctx, next) => {
        ctx.body = 'todo page'
    })
// 路由装载
app
    .use(router.routes())
    .use(router.allowedMethods());//判断是否get

app.listen('3000', () => {
    console.log('start')
})