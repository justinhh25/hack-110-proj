import "./Topbar.css"
import React from 'react'

function Topbar() {
    return(
        <header className="header">
            <nav className="topbar">
                <a href="/Home">Home</a>
                <a href="/Find">Find</a>
                <a href="/Liked">Liked</a>
            </nav>
        </header>
    );
}

export default Topbar