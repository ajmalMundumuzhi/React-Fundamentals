import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor() {
        super() 
        this.state = {
            ParentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.ParentName} from ${childName}`)
    }
  render() {
    return (
      <ChildComponent greetHandler={this.greetParent} />
    )
  }
}

export default ParentComponent