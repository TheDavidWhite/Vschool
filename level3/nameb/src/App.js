import React, { Component } from "react"
import Badge from "./BadgeForm"
import "./App.css"

class App extends Component{
    state = {
        badge: {
            firstName: " ",
            lastName: " ",
            placeOfBirth: " ",
            favFood: " ",
            email: " ",
            phone: " ",
            addComment: " "
        },
        badgesArr: []
    }
    
    handleChange = (event) => {
        console.log("handleChange")
        const {name, value} = event.target
        this.setState( prevState => ({
            badge: {...prevState.badge, [name]: value}
        }))
        console.log(this.state)
    }
    submitBadge = (event) => {
        event.preventDefault()
        console.log("submitBadge")
        const newBadge = {...this.state.badge}
        this.setState(prevState => ({
            badge: {
                firstName: " ",
                lastName: " ",
                placeOfBirth: " ",
                favFood: " ",
                email: " ",
                phone: " ",
                addComment: " "
            },
            badgesArr: [...prevState.badgesArr, newBadge]
        }))
    }
        
        render(){
            console.log("render")
            
            const badges = this.state.badgesArr.map((badge, index) => <Badge key={index} {...badge} />)

            return(
                <div>
                    <form onSubmit={this.submitBadge} className="form-container">
                        <label className="title">Badge Form</label>
                        <br/>
                        <input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name" 
                        minLength="3"
                        value={this.state.badge.firstName}
                        onChange={this.handleChange}
                        required
                        />
                        <input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        minLength="3"
                        value={this.state.badge.lastName}
                        onChange={this.handleChange}
                        required
                        />
                        <input
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        minLength="3"
                        value={this.state.badge.email}
                        onChange={this.handleChange}
                        required
                        />
                        <input 
                        id="birthplace"
                        name="placeOfBirth"
                        placeholder="Place of Birth"
                        minLength="3"
                        value={this.state.badge.placeOfBirth}
                        onChange={this.handleChange}
                        required
                        />
                        <input 
                        //needs to take numbers only
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        type="phone"
                        minLength="3"
                        maxLength="11"
                        value={this.state.badge.phone}
                        onChange={this.handleChange}
                        required
                        />
                        <input 
                        id="favFood"
                        name="favFood"
                        placeholder="Favorite Food"
                        minLength="3"
                        value={this.state.badge.favFood}
                        onChange={this.handleChange}
                        required
                        />
                        <textarea 
                        id="commentArea"
                        name="addComment"
                        value={this.state.badge.addComment}
                        onChange={this.handleChange}
                        placeholder="Important information or additional comments" required
                        >
                        </textarea>
                        <button type="submit">Submit</button>
                    </form>
                    <ul>
                        {badges}
                    </ul>
                </div>
            )
    }
}

export default App