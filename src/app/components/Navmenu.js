import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Navmenu = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/"} className="nav-link">Home</Link></li>
                            <li><Link to={"/addnew/"} className="nav-link">Add new user</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

