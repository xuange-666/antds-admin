import { Redirect,Route,Switch } from "react-router-dom";
import routes from "../routes/routes";

function Auth(props){  //统一管理路由
    let pathname = props.location.pathname
    let itemRouter = routes.find((item,index) => {
        return pathname.search(item.path)!==-1;
    })
    //获取本地登录状态
    let isLogin = JSON.parse(window.localStorage.getItem("TOKEN"))
    if(pathname === "/"){   //首页重定向到登录页
        return <Redirect to="/login"></Redirect>
    }
    if(!itemRouter){    //非法路由
        return <Redirect to="/404"></Redirect>
    }else{    //合法路由
        if(isLogin){ //有登陆状态
            if(pathname === "/login"){
                return <Redirect to="/home"></Redirect>
            }else{
                return <Route to={pathname} component={itemRouter.component}></Route>
            }
        }else{ //没有登录状态
            if(itemRouter.auth){   //有权限
                return <Redirect exact to="/login"></Redirect>
            }else{   //无权限
                return (
                    <Switch>
                        <Route to={pathname} component={itemRouter.component}></Route>
                    </Switch>
                )
            }
        }
    }
}
export default Auth