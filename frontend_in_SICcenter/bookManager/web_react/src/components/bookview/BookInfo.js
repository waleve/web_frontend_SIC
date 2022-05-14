import React from "react";
import {Headerbar} from "../Headerbar";
import {Link} from "react-router-dom";
import {data} from "../../view/HomeView";
import {getBook, getBooks} from "../../services/bookService";




export class BookInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            author:null,
            img:null,
            price:null,
            language:null,
            editauthor:null,
            editname:null,
            editprice:null,
            idx:this.props.id,
        };
    }

    componentDidMount() {
        const callback =  (data) => {
            console.log(data);
            this.setState({name:data.name});
            this.setState({author:data.author});
            this.setState({price:data.price})
            this.setState({img:data.image})
            this.setState({description:data.description})
        };
        getBook(this.props.id, callback);
    }

    showEditorName = (e) => {
        this.setState({editname:1});
    };

    showEditorPrice = (e) => {
        this.setState({editprice:1});
    };

    showEditorAuthor = (e) => {
        this.setState({editauthor:1});
    };

    saveAuthor = (e) => {
        e.preventDefault();
        let input = e.target.firstChild;
        if(!input.value) {
            this.setState({
                editauthor: null,
                author: this.props.author,
            });
        }else {
            let data = this.state.author.slice();
            data = input.value;
            this.setState({
                editauthor: null,
                author: data,
            });
        }
    };

    renderAuthor =()=>{
        if (this.state.editauthor === 1)
        {
            return<form onSubmit={this.saveAuthor}><input type={"text"} /></form>
        }else{
            return <div>作者：{this.state.author}</div>;
        }
    }

    saveName = (e) => {
        e.preventDefault();
        let input = e.target.firstChild;
        if(!input.value) {
            this.setState({
                editname: null,
                author: this.props.author,
            });
        }else {
            let data = this.state.author.slice();
            data = input.value;
            this.setState({
                editname: null,
                name: data,
            });
        }
    };

    renderName =()=>{
        if (this.state.editname === 1)
        {
            return<form onSubmit={this.saveName}><input type={"text"} /></form>
        }else{
            return <div>名称：{this.state.name}</div>;
        }
    }

    savePrice = (e) => {
        e.preventDefault();
        let input = e.target.firstChild;
        if(!input.value) {
            this.setState({
                editprice: null,
                price: this.state.price,
            });
        }else {
            let data = this.state.author.slice();
            data = input.value;
            this.setState({
                editprice: null,
                prcie: data,
            });
        }
    };

    renderPrice =()=>{
        if (this.state.editprice === 1)
        {
            return<form onSubmit={this.savePrice}><input type={"text"} /></form>
        }else{
            return <div>价格：{this.state.price} ￥</div>;
        }
    }

    addToCart=()=>{
        // 将前端的数据发送给后端，包括

    }


    render() {
        return(
            <div>
                <Headerbar/>
                <div className={"book-detail"}>
                    <div >
                        <img src={this.state.img} height={"320px"} className={"bookphoto"}/>
                    </div>
                    <div onDoubleClick={this.showEditorAuthor} key={0}>
                        {this.renderAuthor()}
                    </div>
                    <div onDoubleClick={this.showEditorName}>
                        {this.renderName()}
                    </div>
                    <div key={3} onDoubleClick={this.showEditorPrice}>
                        {this.renderPrice()}
                    </div>
                    <div>
                        简介：
                        {this.state.description}
                    </div>
                </div>
                <button className={"bookbutton"}>添加到购物车</button>
                <Link to={"/Order/" + this.props.idx}>
                    <button className={"bookbutton"} onClick={this.addToCart}>立即购买</button>
                </Link>
            </div>

        )
    }
}


















/*
第一次迭代的内容 之前的内容有一点错别字，被修改了
 */
// export class BookInfo extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name:this.props.name,
//             author:this.props.author,
//             img:this.props.image,
//             prcie:this.props.price,
//             language:this.props.language,
//             editauthor:null,
//             editname:null,
//             editprice:null,
//             idx:this.props.idx,
//
//         };
//     }
//
//     showEditorName = (e) => {
//         this.setState({editname:1});
//     };
//
//     showEditorPrice = (e) => {
//         this.setState({editprice:1});
//     };
//
//     showEditorAuthor = (e) => {
//         this.setState({editauthor:1});
//     };
//
//     saveAuthor = (e) => {
//         e.preventDefault();
//         let input = e.target.firstChild;
//         if(!input.value) {
//             this.setState({
//                 editauthor: null,
//                 author: this.props.author,
//             });
//         }else {
//             let data = this.state.author.slice();
//             data = input.value;
//             this.setState({
//                 editauthor: null,
//                 author: data,
//             });
//         }
//     };
//
//     renderAuthor =()=>{
//         if (this.state.editauthor === 1)
//         {
//             return<form onSubmit={this.saveAuthor}><input type={"text"} /></form>
//         }else{
//             return <div>作者：{this.state.author}</div>;
//         }
//     }
//
//     saveName = (e) => {
//         e.preventDefault();
//         let input = e.target.firstChild;
//         if(!input.value) {
//             this.setState({
//                 editname: null,
//                 author: this.props.author,
//             });
//         }else {
//             let data = this.state.author.slice();
//             data = input.value;
//             this.setState({
//                 editname: null,
//                 name: data,
//             });
//         }
//     };
//
//     renderName =()=>{
//         if (this.state.editname === 1)
//         {
//             return<form onSubmit={this.saveName}><input type={"text"} /></form>
//         }else{
//             return <div>名称：{this.state.name}</div>;
//         }
//     }
//
//     savePrice = (e) => {
//         e.preventDefault();
//         let input = e.target.firstChild;
//         if(!input.value) {
//             this.setState({
//                 editprice: null,
//                 prcie: this.props.price,
//             });
//         }else {
//             let data = this.state.author.slice();
//             data = input.value;
//             this.setState({
//                 editprice: null,
//                 prcie: data,
//             });
//         }
//     };
//
//     renderPrice =()=>{
//         if (this.state.editprice === 1)
//         {
//             return<form onSubmit={this.savePrice}><input type={"text"} /></form>
//         }else{
//             return <div>价格：{this.state.prcie}</div>;
//         }
//     }
//
//
//     render() {
//         return(
//             <div>
//                 <Headerbar/>
//                 <div className={"book-detail"}>
//                     <div >
//                         <img src={this.state.img} height={"320px"} className={"bookphoto"}/>
//                     </div>
//                     <div onDoubleClick={this.showEditorAuthor} key={0}>
//                         {this.renderAuthor()}
//                     </div>
//                     <div onDoubleClick={this.showEditorName}>
//                         {this.renderName()}
//                     </div>
//                     <div key={3} onDoubleClick={this.showEditorPrice}>
//                         {this.renderPrice()}
//                     </div>
//                 </div>
//                 <button className={"bookbutton"}>添加到购物车</button>
//                 <Link to={"/Order/" + this.props.idx}>
//                     <button className={"bookbutton"}>立即购买</button>
//                 </Link>
//             </div>
//
//         )
//     }
// }

