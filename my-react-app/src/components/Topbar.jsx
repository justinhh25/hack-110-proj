import "./Topbar.css"
import React from 'react'

function Topbar() {
    return(
        <nav className="nav">
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/Find">Find</a>
                </li>
                <li>
                    <a href="/Liked">Liked</a>
                </li>
            </ul>
        </nav>
    );
}

export default Topbar