import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import r from './routes'

const app = new koa()

app.use(helmet())
app.use(bodyparser())
app.use(cors())
app.use(async (ctx, next) => {
    ctx.user = {isid: "test"}
    next()
})
app.use(r.routes())

export default app