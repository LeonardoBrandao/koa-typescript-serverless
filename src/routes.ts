import router from 'koa-router';

const r = new router()
r.get('/hello', (ctx, next) => {
    ctx.body = 'Hello world'
    next()
});

export default r