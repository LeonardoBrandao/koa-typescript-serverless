import app from './app'

const serverless: any = require('serverless-http')
module.exports.handler = serverless(app)
