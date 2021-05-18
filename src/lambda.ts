import app from './app'
const serverless = require('aws-serverless-koa');

module.exports.handler = serverless(app)