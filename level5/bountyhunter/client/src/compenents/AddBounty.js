import React, { useState } from "react"

export default function AddBounty(props){
    const intiinputs = { name: props.firstName || "", race: props.race || "", worth: props.worth || "", img: props.img || "" }
    const [inputs, setInputs] = useState(intiinputs)
    function handleChange(e){
        const { name, value } = e.target
        setInputs(previnputs => ({...previnputs, [name]: value}))
    }
    function handleSubmit(e){
        e.preventDefault()

        props.submit(inputs, props._id)
        setInputs(intiinputs)
    }
    return(
        <form>
            <input type="text" placeholder="Name" name="name" value={ inputs.name } onChange={handleChange}/>
            <input type="text" placeholder="Race" name="race" value={ inputs.race } onChange={handleChange}/>
            <input type="number" placeholder="Worth" name="worth" value={ inputs.worth } onChange={handleChange}/>
            <input type="url" placeholder="Picture" name="img" alt="" value={ inputs.img } onChange={handleChange}/>
            <button onClick={handleSubmit}>{ props.btnText }</button>
        </form>
    )
}