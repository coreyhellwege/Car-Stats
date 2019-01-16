import React, { Component } from 'react';

class Car extends Component {
  state = {}
  // state starts off empty, componentDidMount will add the cars object once it's fetched the data from the api
  
  // componentDidMount is used once, the first time the component is mounted to the dom
  componentDidMount() {
    const url = 'http://localhost:5000/'
    fetch(url)
      .then(resp => resp.json())
      .then(json => { 
        const cars = json
        this.setState({ cars })
        // setState triggers a render()
      })
  }

  // Render runs in the browser first before all other lifecycle methods.

  // When the page loads the first time the component hasn't yet fetched the data, so render will return null initially. Then fetch will return our data and render will return our data.

  render() {
    // We need to use parseInt to convert id into an integer, because it is pulled from params in the url as a string
    const id = parseInt(this.props.match.params.id)
    const { cars } = this.state
    // Step 1. 
    if (cars) {
      const car = cars.find(carEl => {
        return id === carEl.id
      })
      return (
        <div className="App">
          <h1>{car.id}: {car.make}</h1>
        </div>
      )
    }
    else { 
      return null 
    }
  }
}

export default Car;
