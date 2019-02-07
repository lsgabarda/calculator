import React, { Component } from 'react'

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            valueFinal: '',
            valueFirstNumber: '',
            valueComp: ''
        }
    }

    clickHandler = (event) => {
        this.setState({
            valueFinal: this.state.valueFinal + event.target.value

        })
    }

    clickCompute = (event) => {

        this.setState({
            valueFirstNumber: this.state.valueFinal,
            valueFinal: '',
            valueComp: event.target.value
        })

    }

    clickTotal = (event) => {
        if (this.state.valueComp == '/') {
            this.setState({
                valueFinal: parseInt(this.state.valueFirstNumber) / parseInt(this.state.valueFinal)
            })
        }
        if (this.state.valueComp == '*') {
            this.setState({
                valueFinal: parseInt(this.state.valueFirstNumber) * parseInt(this.state.valueFinal)
            })
        }
        if (this.state.valueComp == '-') {
            this.setState({
                valueFinal: parseInt(this.state.valueFirstNumber) - parseInt(this.state.valueFinal)
            })
        }
        if (this.state.valueComp == '+') {
            this.setState({
                valueFinal: parseInt(this.state.valueFirstNumber) + parseInt(this.state.valueFinal)
            })
        }

    }


    clickClear = (evenet => {
        this.setState({ valueFinal: '' })
    })
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <td>
                            <input type="text" value={this.state.valueFinal} />
                        </td>

                        <tr>
                            <button value='1' onClick={this.clickHandler}>1</button>
                            <button value="2" onClick={this.clickHandler}>2</button>
                            <button value="3" onClick={this.clickHandler}>3</button>
                            <button value="/" onClick={this.clickCompute}>/</button>
                        </tr>

                        <tr>
                            <button value="4" onClick={this.clickHandler}>4</button>
                            <button value="5" onClick={this.clickHandler}>5</button>
                            <button value="6" onClick={this.clickHandler}>6</button>
                            <button value="*" onClick={this.clickCompute}>*</button>
                        </tr>

                        <tr>
                            <button value="7" onClick={this.clickHandler}>7</button>
                            <button value="8" onClick={this.clickHandler}>8</button>
                            <button value="9" onClick={this.clickHandler}>9</button>
                            <button value="-" onClick={this.clickCompute}>-</button>
                        </tr>
                        <tr>
                            <button value="C" onClick={this.clickClear}>C</button>
                            <button value="0" onClick={this.clickHandler}>0</button>
                            <button value="=" onClick={this.clickTotal}>=</button>
                            <button value="+" onClick={this.clickCompute}>+</button>

                        </tr>

                    </tbody >
                </table >
            </div>

        )
    }
}

export default Calculator
