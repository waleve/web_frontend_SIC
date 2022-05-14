import React from "react";
import {Link} from "react-router-dom";

export class Headerbar extends React.Component{

    render() {
        return(
            <div id="cartHeader" className="cartNav">
                <ul>
                    <li>
                        <Link to="/HomeView">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/CartView">
                            <a>Cart</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <a>Log in</a>
                        </Link>
                    </li>
                    <li><input type="search" placeholder="Search"/></li>
                </ul>
            </div>
        )
    }
}
