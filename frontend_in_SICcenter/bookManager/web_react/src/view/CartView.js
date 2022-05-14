import React from "react";
import '../css/Cart.css'
import {Link} from "react-router-dom";
import {Headerbar} from "../components/Headerbar";
import {CartBody} from "../components/cartview/Cartbody";
import {CartFooter} from "../components/cartview/Cartfooter";

class CartView extends React.Component{

    render() {
        return(
            <div>
                <Headerbar/>
                <CartBody/>
                <CartFooter/>
            </div>
        )
    }

}

export default CartView;