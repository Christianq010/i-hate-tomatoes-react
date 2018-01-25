import React from 'react';
import PropTypes from 'prop-types';

const Headline = () => {
    return (
        <h1 className="some-shit">Hello World!</h1>
    )
}

const Greeting = (props) => {
    const {name, age} = props;
    return (
        <p>This is a apparently cool {name} ({age})</p>
    )
}

export const App = () => {
    return (
    <div className="some-div">    
        <Headline />
        <Greeting name="Hello" age={26} />
    </div>
    )
}

Greeting.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}
