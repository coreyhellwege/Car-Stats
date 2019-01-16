import React, { Component } from 'react';
import CarInfo from './CarInfo'

class Cars extends Component {
  state = {
    cars: [],
    selected: null
  }
  
  componentDidMount() {
    console.log('App is running componentDidMount')
    const url = 'http://localhost:5000/'
    fetch(url)
      .then(resp => resp.json())
      .then(json => { 
        // console.log(json)
        const cars = json
        // console.log(cars)
        this.setState({ cars })
        // console.log(cars)
      })
  }

  componentDidUpdate() {
    console.log('App is running componentDidUpdate')
    // This method gets called after a component is updated, not on first render.
  }

  componentWillMount() {
    console.log('App is running componentWillMount')
    // Opposite of componentDidMount()
    // This is only run when the component is removed from the DOM.
    // Generally used to clean up the state of the objecet before it's destroyed.
  }
  
  shouldComponentUpdate(oldState, newState) {
    // Gives you the ability to check whether your component should be updated. Expects a true or false return.
    // console.log(oldState)
    // console.log(newState)
    console.log('App is running shouldComponentUpdate')
    return true;
    // Because we are returning true, the component will update, then render() will then run, then componentDidUpdate() will run
  }

  handleCarInfo(car) {
    // console.log(car)
    this.setState({ selected: car })
  }

  // We use .map below because it returns a new array for us to display each car. forEach won't work because it doesn't return anything.

  render() {  
    // console.log(cars)
    // console.log('App is running render')
    return (
      <div className="App">
      <h1>Cars Page</h1><hr/>
      { this.state.cars.map((car, index) => <h3 key={index} onClick={() => this.handleCarInfo(car)}>{car.make}</h3>) }
      { this.state.selected && <CarInfo cars={this.state.selected} /> }    
      </div>
    )
  }
}

export default Cars;
