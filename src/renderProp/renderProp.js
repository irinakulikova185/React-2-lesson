import React, { Component } from 'react'
import Message from './message';
import Instruction from './instruction';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {counter : 0};
        this.changeCounter = this.changeCounter.bind(this)
    }

    changeCounter() {
        this.setState(({counter}) => ({counter: counter + 1}))
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.counter)}
                <button onClick={this.changeCounter}>Click me</button>
            </div>
        )
    }
}

const CounterWithMessage = () => {
    return (
        <div   style={{display: 'flex', justifyContent: 'space-around'}}>
        <Counter render={counter => (<Message counter={counter}/>)} />
        <Counter render={counter => (<Instruction counter={counter}/>)} />
        </div>
    )}
    
    

export default CounterWithMessage