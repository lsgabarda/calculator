// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

import React from "react";
import ReactDOM from "react-dom";
import "phoenix_html"

import Hello from './components/Hello'
import Counter from './components/Counter'
import Parent from './components/Parent'
import Calculator from './components/Calculator'

class App extends React.Component {
    state = {
        name: 'lor'
    }
    render() {

        return (
            <div>
                <Calculator />
            </div>
        )
    }
}


export default App;

ReactDOM.render(<App />, document.getElementById("react-app"));

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
