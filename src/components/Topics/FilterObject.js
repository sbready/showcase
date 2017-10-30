import React, { Component } from 'react';


class FilterObject extends Component {
    
    constructor() {
        super()

        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],

              userInput: '',
              filteredEmployees: []
        }

    }
    // question about handlechange
    handleChange (val) {
        this.setState( { userInput: val } )    
    }
    // question about hasownproperty
    filteredEmplyees (prop) {
        var employees = this.state.employees;
        var filteredEmployees = [];

        for(var i = 0; i < employees.length; i++) {
            if(employees[i].hasOwnProperty(prop)) {
                filteredEmployees.push(employees[i]);
            }
        }
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                {/* question with JSON */}
                <span className='puzzleText'>Original: {JSON.stringify(this.state.employees, null, 10)} </span>
                {/* question with handlechange */}
                <input onChange= {(e) => this.handleChange(e.target.value)} className='inputLine'></input>
                <button onClick= {() => this.filterEmployees(this.state.userInput) } className='confirmationButton'>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;