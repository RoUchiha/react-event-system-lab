// Code Keypad Component Here
import React from 'react';


class Keypad extends React.Component {


    handleKeyPress = () => {
        console.log('Entering password...')
    }


    render() {
        return (

            <input type="password" onKeyUp={this.handleKeyPress}></input>
        )
    }


}

export default Keypad;