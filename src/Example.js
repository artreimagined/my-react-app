import React, { useState, useEffect } from 'react';
import './Example.css';

const Example = () => {

    //first variable is a getter
    //second is a setter
    const [count, setCount] = useState(0);

    //Similar to componentDidMount and componenrDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        // alert('this is an alert');
        console.log("This is a log");
        
    })

    return (
        <div>
            <p>You clicked  <p id="count">{count}</p> times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>

    );
}

export default Example;