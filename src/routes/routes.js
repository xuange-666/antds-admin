import Home from "../Home/Home";
import Login from "../Login/Login";
import Pages from "../Pages/Pages";
import Users from "../Users/Users";
import News from "../News/News";
import NotFound from "../404/404";

//统一管理路由
export default [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/login",
        component:Login,
        exact:true
    },
    {
        path:"/404",
        component:NotFound,
        exact:true
    },
    {
        path:"/pages",
        component:Pages,
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