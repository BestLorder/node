const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors')
const app = new Koa();
const router = new Router();

app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return "*"; // 允许来自所有域名请求
    }
    return 'http://localhost:8000';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

router
  .get('/firstScn', (ctx, next) => {
    ctx.body = {
      errno: 0,
      data: {
        totalPage: 3
      },
      errmsg: "success"
    };
  })
  .get('/todo', (ctx, next) => {
    ctx.body = 'todo page'
  })
// 路由装载
app
  .use(router.routes())
  .use(router.allowedMethods()); //判断是否get

app.listen('3000', () => {
  console.log('start http://localhost:3000')
})