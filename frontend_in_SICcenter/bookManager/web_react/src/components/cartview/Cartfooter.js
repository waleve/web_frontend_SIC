import React from "react";
import {Button} from "antd";






// 这个地方要清空购物车的话，需要给后端发送一个数据，然后将选中的表，发送出去

export class CartFooter extends React.Component{
    render() {
        return(
            <div className={"cartfooter"}>
                <Button className={"cartbutton"}>结算订单</Button>
            </div>
        )
    }
}
