import Home from "../Home/Home";
import Login from "../Login/Login";
import Pages from "../Pages/Pages";
import Users from "../Users/Users";
import News from "../News/News";
import NotFound from "../404/404";

//统一管理路由
export default [
    {
        path:"/home",
        component:Home,
        auth:true,
        exact:true
    },
    {
        path:"/login",
        component:Login,
        auth:false,
        exact:true
    },
    {
        path:"/404",
        component:NotFound,
        auth:false,
        exact:true
    },
    {
        path:"/pages",
        component:Pages,
        auth:true,
        routes:[
            {
                path:"/pages/news",
                component:News,
            },
            {
                path:"/pages/users",
                component:Users,
            }
        ]
    }
]