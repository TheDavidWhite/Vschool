import React from 'react';
import BoxElement from './BoxElement';

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
            boxes: ['white', 'white', 'white', 'white']
        }
        
        this.smallTimeDJ = this.smallTimeDJ.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
        this.proDJ = this.proDJ.bind(this)
        this.proDJ2 = this.proDJ2.bind(this)
        this.bigTimeDJ = this.bigTimeDJ.bind(this)
        this.playTune = this.playTune.bind(this)
    }

   
    smallTimeDJ() {
        if (this.state.boxes[0] === 'white') {
            this.setState({
                boxes: ['black', 'black', 'black', 'black']
            })
        } else {
            this.setState({
                boxes: ['white', 'white', 'white', 'white']
            })
        }
    }

    partyDJ() {
        this.setState({
            boxes: ['purple', 'Cyan', this.state.boxes[2], this.state.boxes[3]]
        })
    }
    proDJ() {
        let items = [...this.state.boxes]
        items[2] = 'blue'
        this.setState({
            boxes: items
        })
    }
    proDJ2() {
        let items = [...this.state.boxes]
        items[3] = 'blue'
        this.setState({
            boxes: items
        })
    }
    bigTimeDJ() {
        this.setState({
           
            boxes: ['orange', 'red', 'yellow', 'blue', 'green', 'purple', 'tan', 'brown', 'black', 'white']
        })
    }
    playTune() {
        new Audio('').play()
    }

    refreshPage() {
        window.location.reload(false)
    }

    render() {
        
        const boxes = this.state.boxes.map(box => {
            return < BoxElement color={box} />
        })
        return (
           
            <div className="container">
                {boxes}
                <button className='btn' onClick={this.smallTimeDJ}>Small Time DJ</button>
                <button className='btn' onClick={this.partyDJ}>Party DJ</button>
                <button className='btn' onClick={this.proDJ}>Pro DJ # 1</button>
                <button className='btn' onClick={this.proDJ2}>Pro DJ # 2</button>
                <button className='btn' onClick={this.bigTimeDJ}>Big Time DJ</button>
                <div className='container2'>
                    <button className='btn' onClick={this.playTune}>Play Sound</button>
                    <button className='btn' onClick={this.refreshPage}>Stop And Restart</button>
                </div>
            </div>
        )
    }
}
export default Buttons;