


import React, { Component } from 'react'

export class BindEvent extends Component {
  
    constructor() {
        super() 
        this.state = {
            message: 'Click'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: "Clicked"
        })
    }
    render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default BindEvent