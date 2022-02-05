import React,  { useState }from "react"


export default function Bounty(props){
    const {name, race, img, worth, _id} = props
    return(
        <div className="bounty">
            <h1>Name: { name }</h1>
            <p>Race: { race }</p>
            <p>Bounty: { worth }</p>
            <img src={ img }/>
        </div>
    )
}