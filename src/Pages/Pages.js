import { BrowserRouter as Router,Link,Route,Switch, withRouter} from "react-router-dom";
import { renderRoutes,matchRoutes } from "react-router-config";
import routes from "../routes/routes"
function Pages(props){
    console.log(props)
   
    let arr = matchRoutes(routes,props.location.pathname)
    console.log(arr)
    return (
        <>
            <div>pages works</div>
            <Link to="/pages/news">news</Link><br/>
            <Link to="/pages/users">users</Link>
           
            <Switch>
               {renderRoutes(arr[0].route.routes)}
            </Switch>
            
        </>
    )
}
export default withRouter(Pages);




