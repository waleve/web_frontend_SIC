import React from "react";
import '../css/font-awesome-4.7.0/css/font-awesome.css'
import '../css/font-awesome-4.7.0/css/font-awesome.min.css'
import '../css/HomeView.css'
import {SideMenu} from "../components/homeview/sidemenu";
import {Mainframe} from "../components/homeview/mainframe";

export const data = [["the story of stone", "xueqin cao", "Chinese", "1880s", "150 million","http://img3m6.ddimg.cn/31/22/23828836-1_w_8.jpg","0"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million","http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg","1"],
    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million","http://img3m1.ddimg.cn/88/0/25479421-1_w_1.jpg","2"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million","http://img3m0.ddimg.cn/82/15/23273200-1_w_1.jpg","3"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100 million","http://img3m5.ddimg.cn/86/22/28475555-2_u_9.jpg","4"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million","http://img3m7.ddimg.cn/43/9/25352557-1_w_3.jpg","5"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million","http://img3m4.ddimg.cn/13/30/28481224-1_w_3.jpg","6"],];


class HomeView extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let user = localStorage.getItem("user");
        this.setState({user:user});
    }

    render() {
        return(
            <div className={"mainbody"}>
                <SideMenu/>
                <Mainframe/>
            </div>
        )
    }
}

export default HomeView;




