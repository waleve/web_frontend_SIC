import React from "react";
import {Headerbar} from "../Headerbar";

export class Order extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:this.props.name,
            author:this.props.author,
            img:this.props.image,
            prcie:this.props.price,
            language:this.props.language,
            edit:null,
        };
    }
    render() {
        return(
            <div>
                <Headerbar/>
                <div>
                    名称：{this.state.name}
                </div>
                <div>
                    <img src={this.state.img} height={"320px"}/>
                </div>
                <div>
                    {this.state.price}
                </div>
                <div>
                    订单号：123456789
                </div>
                <div>
                    售价：{this.state.prcie}
                </div>
            </div>
        )
    }


}
