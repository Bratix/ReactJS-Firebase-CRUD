import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import { Main } from "./components/Main";
import { AddNew } from "./components/AddNew";
import { Navmenu } from "./components/Navmenu";
import { Detail } from "./components/Detail";
import { Edit } from "./components/Edit";



class App extends React.Component {

    render() {
        return(
            <div>
                <Router>

                    <Navmenu/>

                    <Route exact path="/" component = {Main} />
                    <Route path="/addnew/" component = {AddNew} />
                    <Route path="/detail/:key" component = {Detail} />
                    <Route path="/edit/:key" component = {Edit} />

                </Router>
            </div>
        )
    }
    
}

render(<App/>, window.document.getElementById("app"))