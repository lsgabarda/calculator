import React, { Component } from 'react'

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            valueTotal: ''
        }
    }

    clickHandler = (event) => {
        this.setState({ valueTotal: this.state.valueTotal + event.target.value })
    }

    clickDivide = (event) => {
        if (event.target.value == "/") {
            console.log('it is divide')
        }
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <td>
                            <input type="text" value={this.state.valueTotal} />
                        </td>

                        <tr>
                            <button value='1' onClick={this.clickHandler}>1</button>
                            <button value="2" onClick={this.clickHandler}>2</button>
                            <button value="3" onClick={this.clickHandler}>3</button>
                            <button value="/" onClick={this.clickDivide}>/</button>
                        </tr>

                        <tr>
                            <button value="4">4</button>
                            <button value="5">5</button>
                            <button value="6">6</button>
                            <button value="*">*</button>
                        </tr>

                        <tr>
                            <button value="7">7</button>
                            <button value="8">8</button>
                            <button value="9">9</button>
                            <button value="-">-</button>
                        </tr>
                        <tr>
                            <button value="0">0</button>
                            <button value="+">+</button>
                            <button>=</button>
                        </tr>

                    </tbody >
                </table >
            </div>

        )
    }
}

export default Calculator
