import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Parent'
        }
    }

    clickHandler = () => {
        alert(`Hello ${this.state.message}`)
    }

    render() {
        return (
            <div>
                <Child greetings={this.clickHandler} />
            </div>
        )
    }
}

export default Parent
