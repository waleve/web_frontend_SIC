import React from "react";
import {Link} from "react-router-dom";

export class SideMenu extends React.Component{
    render() {
        return(
            <div id="sidenav">
                <Link to="/HomeView">
                    <a>Home</a>
                </Link>
                <Link to="/CartView">
                    <a>Cart</a>
                </Link>
                <Link to="/">
                    <a>Log in</a>
                </Link>
            </div>
        )
    }
}
