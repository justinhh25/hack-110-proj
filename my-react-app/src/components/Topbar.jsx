import "./Topbar.css"
import React from 'react'

function Topbar() {
    return(
        <header className="header">
            <nav className="topbar">
                <a href="/Home">Home</a>
                <a href="/Find">Find</a>
                <input type="text" placeholder="Search..."></input>
            </nav>
        </header>
    );
}

export default Topbar