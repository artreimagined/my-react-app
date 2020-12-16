import React from 'react';
import './App.css';

const FunFact = () => {
    const funFact = [
        {
            fact: 'I was named after another "Terry".'
        },
        {
            fact: 'I am from New York.'
        }

    ];

    return (
        <ul>
        {funFact.map((item) => (
          <li>{item.fact}</li>
        ))}
      </ul>
    );
}

export default FunFact;