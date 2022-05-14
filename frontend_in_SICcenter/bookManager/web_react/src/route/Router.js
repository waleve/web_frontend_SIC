import React, {useEffect} from "react";
import LoginView from "../view/LoginView";
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";
import HomeView from "../view/HomeView";
import CartView from "../view/CartView";
import BookDetail, {BookDetails} from "../view/BookView";
import {CreatOreder} from "../view/OrderView";
import {history} from "../utils/history";


export function BasicRoute(){



    return(
        <BrowserRouter history={history}>
            <Routes>
                {/*<Route path="/" element={<NavLink to="/login"></NavLink>} ></Route>*/}
                <Route path="/" element={<LoginView/>}></Route>
                <Route path="/HomeView" element={<HomeView/>}></Route>
                <Route path="/CartView" element={<CartView/>}></Route>
                <Route path="/BookDetails/:name" element={<BookDetails/>}></Route>
                <Route path="/Order/:idx" element={<CreatOreder/>}></Route>
            </Routes>
        </BrowserRouter>
    )

}

// export class BasicRoute extends React.Component{
//
//     render() {
//         return(
//             <BrowserRouter>
//                 <Routes>
//                     {/*<Route path="/" element={<NavLink to="/login"></NavLink>} ></Route>*/}
//                     <Route path="/" element={<LoginView/>}></Route>
//                     <Route path="/HomeView" element={<HomeView/>}></Route>
//                     <Route path="/CartView" element={<CartView/>}></Route>
//                     <Route path="/BookDetails/:name" element={<BookDetails/>}></Route>
//                     <Route path="/Order/:idx" element={<CreatOreder/>}></Route>
//                 </Routes>
//             </BrowserRouter>
//         )
//     }
//
//
// }
export default BasicRoute;