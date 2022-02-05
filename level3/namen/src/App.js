import React from "react"

import "./style.css"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            imput: "",
            imputs: []
        }
    }
    handleChange = (event) => {
        this.setState({
            imput: event.target.value
        })
    }

    updateInput = (event) => {
        event.preventDefault()
        this.setState({
            imputs: [...this.state.imputs, this.state.imput],
            imput: ""
        })
    }

    
    render(){
        return(
            <div>
                <form onSubmit={this.updateInput}>
                    <input type="text" className="text" value={this.state.imput} onChange={this.handleChange}/>
                    <button onClick={this.updateInput}>Add</button>
                </form>
                <div>
                    {this.state.imputs.map((imput, index) => {
                        return <h1 key={index}>{imput}</h1>
                    })}
                </div>
            </div>
        )
    }   
}

export default App