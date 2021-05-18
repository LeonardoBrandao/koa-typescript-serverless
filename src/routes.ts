import router from 'koa-router';

const r = new router()
r.get('/', (ctx, next) => {
    ctx.body = 'Hello world'
    next()
});

export default r