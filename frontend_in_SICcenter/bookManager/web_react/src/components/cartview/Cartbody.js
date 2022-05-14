import React from "react";
import {CartItem} from "./Cartitem";
import {getBook, getCarts, getOrder} from "../../services/bookService";




export class CartBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cart_item:[],
            id:null,
        };
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user"));
        this.setState({user:user});
        this.setState({id:user.userId});

        const callback =  (data) => {
            console.log(data);
            console.log("item")
            console.log(data[0].cartId);
            console.log(data[0].items);
            this.setState({cart_item:data[0].items})
            // console.log(this.state.cart_item);
        };
        console.log(user.userId);
        getCarts(user.userId, callback);
    }


    render() {
        return(
            <div className="cartColumns">
                <ul className="products">
                    {this.state.cart_item.map(function (row,idx){
                        return(
                            <CartItem name={row.book.name} price={row.book.price} src={row.book.image}/>
                        )
                    })}

                    {/*<CartItem name={"哈利波特"} price={"$15.2"} src={"http://img3m1.ddimg.cn/88/0/25479421-1_w_1.jpg"}/>*/}
                    {/*<CartItem name={"红楼梦"} price={"$32.1"} src={"http://img3m6.ddimg.cn/31/22/23828836-1_w_8.jpg"}/>*/}
                </ul>
            </div>
        )
    }
}
