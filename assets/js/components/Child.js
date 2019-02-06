import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={() => props.greetings()}>Hello Parent</button>
        </div>
    )
};

export default Child;
