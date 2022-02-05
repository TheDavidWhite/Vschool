import React, { Component } from "react";
import DiceBox from './DiceBox';


class App extends Component {
    constructor() {
        super()
        this.state = {
            numbers: [{
                num1: null,
                num2: null,
                num3: null,
                num4: null,
                num5: null
            }]
        }
    }

    rollDice = () => {
        this.setState(prevState => {
            return {
                numbers: [{
                    num1: prevState.num1 = Math.floor(Math.random() * 6) + 1,
                    num2: prevState.num1 = Math.floor(Math.random() * 6) + 1,
                    num3: prevState.num1 = Math.floor(Math.random() * 6) + 1,
                    num4: prevState.num1 = Math.floor(Math.random() * 6) + 1,
                    num5: prevState.num1 = Math.floor(Math.random() * 6) + 1
                }]
            }
        })
    }
    clearDice = () => {
        this.setState(prevState => {
            return {
                numbers: [{
                    num1: null,
                    num2: null,
                    num3: null,
                    num4: null,
                    num5: null
                }]
            }
        })
    }
    render() {
        const showDice = this.state.numbers.map(number => <DiceBox number={number} />)
        return (
            <div className='diceContainer'>
                {showDice}
                <button onClick={this.rollDice}>Roll Dice</button>
                <button onClick={this.clearDice}>Clear Dice</button>
            </div>
        )
    }
}

export default App;
        