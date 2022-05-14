import React, {useEffect} from "react";

import {Link, useParams} from "react-router-dom";
import {data} from "./HomeView";
import '../css/bookdetaile.css'
import {BookInfo} from "../components/bookview/BookInfo";





export function  BookDetails(){


    let index_string = useParams();
    let index = index_string.name;

    return(
        <div>
            <BookInfo id={index} />
        </div>
    )
}





/*
迭代1的内容
 */
// export function  BookDetails(){
//
//
//     let index_string = useParams();
//     let index = index_string.name;
//     let info = data[index];
//
//
//
//     return(
//         <div>
//             <BookInfo name={info[0]} author={info[1]} language={info[2]} time={info[3]} price={info[4]} image={info[5]} idx={index} />
//         </div>
// )
// }
//

