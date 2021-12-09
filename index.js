// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// Div pasted from codepen.io
const App = function() {
    const buttonText= { text: 'Click me' };
    const labelText = 'Enter Name';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style= {{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>  
    );
};

//Take the react componenet and show it on the screen 
// need a reference to div with id=root (from index.html)
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);