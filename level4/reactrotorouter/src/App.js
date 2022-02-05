import React from "react"
import {Switch, Route, Link } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

export default function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/services">
                    <Services/>
                </Route>
            </Switch>
        </div>
    )
}