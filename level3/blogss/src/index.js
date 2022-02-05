import React from "react";
import ReactDOM from "react-dom";
import Bloglist from "./Bloglist";
import Footer from "./Footer";

function App(){
    return(
        <div>
            <Bloglist/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));