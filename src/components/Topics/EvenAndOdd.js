import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }
// question on handlechange and why necessary
    handleChange(val) {
        this.setState({ userInput: val });
    }

    assignEvenAndOdd (userInput) {
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];

        for(var i = 0; i < arr.length; i++) {
            if ( arr[i] % 2 === 0) {
                evens.push( parseInt(arr[i], 10) );
            } else {
                odds.push( parseInt( arr[i], 10) );
            }
        }

        this.setState({ evenArray: evens, oddArray: odds });
    }

    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input onChange={(e) => this.handleChange(e.target.value) } className='inputLine'></input>
                <button onClick={() => { this.assignEvenAndOdds(this.state.userInput) }} className='confirmationButton'>Split</button>
                {/* Question on JSON */}
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray) }</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

export default EvenAndOdd;
