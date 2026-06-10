import React, { Component } from 'react'

export class MountA extends Component {
  constructor() {
    super()
    this.state = {
        count: 0
    }

    console.log("Mounting under contructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Mounting under getDerived....')
    return null
  }

  componentDidMount() {
    console.log("Component did mount");
  }

    render() {
        console.log("Under render")
    return (
      <div>MountA</div>
    )
  }
}

export default MountA