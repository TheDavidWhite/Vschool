import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import CharacterList from "./CharacterList"
import Locations from "./Locations"
import Episodes from "./Episodes"

function Navbar(){
    return(
        <div>
            <div className="topnav">
                <Link to="/">CharacterList</Link>
                <Link to="/locations">Locations</Link>
                <Link to="/episode">Episodes</Link>
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit" className="button">Filter</button>
                </form>
                
            </div>
        
            <Routes>
                <Route path="/" exact element={<CharacterList/>}/>
                <Route path="/episode" element={<Episodes/>}/>
                <Route path="/location" element={<Locations/>}/>
            </Routes>
        </div>
    )
}
export default Navbar