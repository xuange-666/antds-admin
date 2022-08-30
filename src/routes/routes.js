import Home from "../Home/Home";
import Login from "../Login/Login";
import Pages from "../Pages/Pages";
import Users1 from "../Users1/Users1";
import News from "../News/News";
import NotFound from "../404/404";
import Users from "../component/Users/Users";
import Roles from "../component/Roles/Roles";
import First from "../component/First/First";
//统一管理路由
export default [
    {
        path:"/home",
        component:Home,
        auth:true,
        routes:[
            {
                path:"/home/first",
                component:First
            },
            {
                path:"/home/users",
                component:Users
            },
            {
                path:"/home/roles",
                component:Roles
            }
        ]
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
                component:Users1,
            }
        ]
    }
]