import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const { name, superName } = this.props
        return <h1>Welcome Mr. {name} a.k.a {superName}</h1>
    }
}

export default Welcome;