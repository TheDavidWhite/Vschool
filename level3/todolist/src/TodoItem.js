import React from "react"

function Todoitem(props) {
    const completedStyle = {
        frontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input 
            type="checkbox" 
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null} >{props.item.text}</p>
        </div>
    )
}

export default Todoitem