import React from 'react';

const Hello = () => {
    // return (
    //     <div className="hello">
    //         <h1>Hello Ajmal</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        { id: 'hello', className: 'helloName'},
        React.createElement('h1', null, 'Hello Ajmal')
    )
}

export default Hello;