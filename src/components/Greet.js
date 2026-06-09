import React from 'react';

// function Greet() {
//     return <h1>Hello Ajmal</h1>
// }

const Greet = (props) => {
    const { name, superName } = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {superName} </h1>
            {props.children}
        </div>
    )
}

export default Greet;