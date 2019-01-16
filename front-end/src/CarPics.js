import React, { Component } from 'react';
import './App.css'

class CarPics extends Component {
  state = {
    cars: [],
  }
  
  render() {
    return (
      <div className="App">
      <h1>Car Pics</h1><hr/>
      { this.state.cars.map((car, index) => {
        const path = `/cars/${car.id}`
          return (
            <a href={path} key={index}>
              <p>{car.make}</p>
            </a>
          )
        })
      }
      </div>
    );
  }
}

export default CarPics;
