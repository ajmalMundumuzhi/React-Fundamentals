 import React, { Component } from 'react';

class Count extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     },
    //     () => {
    //         console.log('Callback value', this.state.count) if wanna log after execution of setState
    //     } 
    // )
    // console.log(this.state.count) // this will log the previous value of count because setState is asynchronous

    this.setState(prevState => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count) 

    }

    IncrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.IncrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default Count;