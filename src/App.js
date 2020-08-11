import React from 'react';
import PropTypes from "prop-types"
import { render } from '@testing-library/react';

class App extends React.Component{
    state = {
        count : 0
    };
    add = () => {
        this.setState(current => ({count: current.count + 1}))
    }
    minus = () => {
        this.setState(current => ({count: current.count - 1}))
    }
    render(){
        return (
            <diV>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>minus</button>
            </diV>
        )
    }
}

export default App;



