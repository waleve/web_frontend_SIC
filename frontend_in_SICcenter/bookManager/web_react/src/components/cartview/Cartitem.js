import React from "react";

export class CartItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="product">
                <div>
                    <img src={this.props.src} className={"cartphoto"}/>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.price}</p>
                </div>
            </li>
        )
    }
}
