//服务器文件
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./dbs/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(9000, () => {
    console.log('sdfsdfsdf')
})