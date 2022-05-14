import React from "react";
import {data} from "../../view/HomeView";
import {Header} from "./header";
import {Topnav} from "./topnav";
import {Book} from "../bookview/book";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {BookExcel} from "../bookview/Bookexcel";

const kinds = ["历史","数学","科学","军事","母婴","宗教"]
export const bookkinds = kinds.map((kind)=>
    <div>
        <li  className="fa fa-book" aria-hidden="true">
            <a href="#">{kind}</a>
        </li>
    </div>
);

export class Mainframe extends React.Component{



    render() {
        return(
            <div id={"mainframe"}>
                <Header/>
                <Topnav/>
                <div className="row">
                    <div id="siderow" className="column side">
                        <h3>BOOKS</h3>
                        {bookkinds}
                    </div>
                    <div className="column main">
                        <BookExcel  initialData={data} id={"bookexcel"}/>
                        {/*<BookExcel  id={"bookexcel"}/>*/}
                    </div>
                </div>
            </div>
        )
    }
}
