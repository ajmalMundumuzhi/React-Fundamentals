import React from 'react';

// function Greet() {
//     return <h1>Hello Ajmal</h1>
// }

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.superName} </h1>
            {props.children}
        </div>
    )
}

export default Greet;