const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
    <div className="some-div">    
        <h1 className="some-shit">Hello World!</h1>
        <p>This is a p tag</p>
    </div>
    )
}

ReactDOM.render( 
    <App />,
    document.getElementById('root')
);