import React, { Component } from 'react'

export class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Ajmal"
    }
  }

  static getDerivedFromProps(props, state) {
    console.log("Lifecycle A getDerivedFromProps")
    return null;
  }

  shouldComponentUpdate() {
    console.log("Lifecycle A ShouldComponentUpdate")
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate() {
    console.log("Lifecycle A componentDidUpdaye ");
    
  }
  changeState = () => {
    this.setState({
        name: "Mohammed"
    })
  }

    render() {
    return (
      <div>
        <h1>
            LifecycleA
        </h1>
        <button onClick={this.changeState}>
            Click To Change
        </button>
      </div>
    )
  }
}

export default LifeCycleA