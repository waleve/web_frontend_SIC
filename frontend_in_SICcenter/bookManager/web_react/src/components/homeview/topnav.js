import React from "react";

function toggleNav() {
    var x = document.getElementById("mainframe");
    x.classList.toggle("open");
}

export class Topnav extends React.Component{
    render() {
        return(
            <div className="topnav">
                <div className="click" onClick={toggleNav}>&#9776; Click</div>
                {/*<input className="topnav search" type="search" placeholder="Search" />*/}
            </div>
        )
    }
}
