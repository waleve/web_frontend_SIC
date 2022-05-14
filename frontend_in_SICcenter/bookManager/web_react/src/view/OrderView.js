import React from "react";
import {Link, useParams} from "react-router-dom";
import {data} from "./HomeView";
import {BookInfo} from "./BookView";
import {Order} from "../components/orderview/Order";



export function CreatOreder(){
    let index_string = useParams();
    let index = index_string.idx;
    let info = data[index];


    return(
        <div>
            <Order name={info[0]} author={info[1]}   price={info[4]} image={info[5]} idx={index} />
        </div>
    )
}

// export function CreatOreder(){
//
//
//     let index_string = useParams();
//     let index = index_string.idx;
//     let info = data[index];
//
//
//
//
//
//     return(
//         <div>
//             <Order name={info[0]} author={info[1]}   price={info[4]} image={info[5]} idx={index} />
//         </div>
//     )
// }