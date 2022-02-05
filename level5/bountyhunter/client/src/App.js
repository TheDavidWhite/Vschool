import React, { useState, useEffect } from "react"
import axios from 'axios'
import Bounty from "./compenents/Bounty"
import AddBounty from "./compenents/AddBounty"

export default function App(){
    const[bounty, setBounty] = useState([])

    function getBounty(){
        axios.get("/bounty")
            .then(res => setBounty(res.data))
            .catch(err => console.log(err))
    }
    function postBounty(newBounty){
        axios.post("/bounty", newBounty)
            .then(res => {
                setBounty(prevBounty => [...prevBounty, res.data])
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getBounty()
    }, [] )
    return(
        <div>
            <div className="bounty-container">
                <AddBounty submit={postBounty}
                btnText="Post Bounty"/>
               { 
               bounty.map(bounty => 
               <Bounty 
               {...bounty} 
               key={bounty.name}/>)
               }
            </div>
        </div>
    )
}