import React from 'react';
import { Link,Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config"
function Pages({route}){
    console.log(route.routes)
    return(
        <div>
            <h3>Pages1111</h3>
            <Link to='/pages/news'>news</Link><br/>
            <Link to='/pages/users'>users</Link>
            <Switch>
                {
                    renderRoutes(route.routes)
                }
            </Switch>
        </div>
    )
}
export default Pages;