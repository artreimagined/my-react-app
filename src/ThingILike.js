import React from 'react';

const ThingILike = () => {
    const thingsILike = ['Painting', 'Coding', 'Sleeping'];
    
    const listItems = thingsILike.map(thing =>
        <li>{thing}</li>
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default ThingILike;