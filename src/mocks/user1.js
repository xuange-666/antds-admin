//用户管理的接口

let data = []
for(let i = 0;i<100;i++){
    data.push({
        id:`${i}`,
        key:`${i}`,
        name:`张三${i}`,
        age:"22",
        work:"web工程师",
        zhiwei:"技工"
    })
}
let menus = [
    {"id":0,"key":"首页","name":"首页","type":"站外菜单"},
    {"id":1,"key":"文档","name":"文档","type":"站外菜单"},
    {"id":2,"key":"自定义头部","name":"自定义头部","type":"菜单"},
    {"id":3,"key":"用户管理","name":"用户管理","type":"菜单"},
    {"id":4,"key":"角色管理","name":"角色管理","type":"菜单"},
    {"id":5,"key":"菜单管理","name":"菜单管理","type":"菜单"},
    {"id":6,"key":"代码生成","name":"代码生成","type":"菜单"},
    {"id":7,"key":"404页面不存在","name":"404页面不存在","type":"菜单"},
    {"id":8,"key":"示例","name":"示例","type":"菜单"}
]
let roles = {
    "roles":[
        {
            "id":0,
            "key":0,
            "name":"admin",
            "describle":"用户角色的权限如右图",
            "menu":["首页","文档","自定义头部","用户管理","角色管理","菜单管理","代码生成","404页面不存在","示例"]
        },
        {
            "id":1,
            "key":1,
            "name":"张三",
            "describle":"用户角色的权限如右图",
            "menu":["首页","文档","自定义头部","代码生成","404不存在"]
        },
        {
            "id":2,
            "key":2,
            "name":"李四",
            "describle":"用户角色的权限如右图",
            "menu":["首页","文档","自定义头部","404不存在"]
        },
        {
            "id":3,
            "key":3,
            "name":"王五",
            "describle":"用户角色的权限如右图",
            "menu":["首页","文档","代码生成","404不存在"]
        }
    ]
}

module.exports={
    users:data,
    menus,
    roles:roles
}