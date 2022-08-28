// 服务器文件
const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require("./dbs/user.js")
// console.log(data)
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser')
const jwt = require("jsonwebtoken")
server.use(middlewares)
// -------------------
// 模拟登录接口
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
server.post("/login",urlencodedParser,function(req,res){
    console.log(req.body)
    
    let {userName,password} = req.body
    if(userName!=="admin"||password!=="111"){
        res.send({
            status:101,
            code:"101",
            message:"登录或密码错误",
            name:null,
            TOKEN:null
        })
    }else{
        // 生成token
        let TOKEN = jwt.sign({password},"helloweb")   //生成一个token
        // let jiemi = jwt.verify(token,"helloweb")
        // console.log(jiemi)
        res.send({
            status:1,
            code:"200",
            message:"sucess",
            name:userName,
            TOKEN
        })
    }
    
})

server.use(router)
server.listen(9000, () => {
  console.log('JSON Server is running')
})