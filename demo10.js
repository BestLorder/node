const Koa=require('koa');
const app=new Koa();
app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        ctx.cookies.set(
            'MyName','Lorder',{
                domain:'127.0.0.1',
                path:'/index',
                maxAge:1000*60*60*24,
                expires:new Date('2018-08-29'),
                httpOnly:false,
                overwrite:false
            }
        );
        ctx.body='cookies ok'
    }else{
        if(ctx.cookies.get('MyName')){
            ctx.body=ctx.cookies.get('MyName')
        }else{
            ctx.body='cookies none'
        }
        
    }
})
app.listen(3000,()=>{
    console.log('app is starting at port 3000')
})