import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Welcome Mr. {this.props.name} a.k.a {this.props.superName}</h1>
    }
}

export default Welcome;