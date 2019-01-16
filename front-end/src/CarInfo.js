import React, { Component } from 'react';


class CarInfo extends Component {

  state = { car: null }

  componentDidUpdate() {
    const { make } = this.props.cars
    fetch(`http://localhost:5000/cars/make/${make}`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        this.setState({ car: json })
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps.cars)
    // console.log(this.props.cars)

    // This line is the same as the expression below:
    return (nextProps.cars.make !== this.props.cars.make)
    // return true;

    // if (nextProps.cars !== this.props.cars) {
    //   return true
    // } else {
    //   return false
    // }

  }
  
  render() {
    console.log(this.state)
    if (this.state.car) {
      const { make, engine, model, bodyType, price, year } = this.state.car
      return (
        <div>
          <h3>More Info:</h3>
            <p><strong>Make: </strong>{make}<br/></p>
            <p><strong>Model: </strong>{model}<br/></p>
            <p><strong>Engine: </strong>{engine.cylinders} cylinders, {engine.litres} litres, {engine.horsepower} horsepower</p>
            <p><strong>Body Type: </strong>{bodyType}<br/></p>
            <p><strong>Price: $</strong>{price}<br/></p>
            <p><strong>Year: </strong>{year}<br/></p>         
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }
}




// implicit return
// const Car = (props) => {
//   return (
//       <div key={props.id}>
//         <p><strong>Make:</strong>{props.make}</p>
//         <p><strong>Model:</strong>{props.model}</p>
//         <p><strong>Body Type:</strong>{props.bodyType}</p>
//         <p><strong>Price:</strong>{props.price}</p>
//         <p><strong>Year:</strong>{props.year}</p>
//         <hr/>
//       </div>
//   )
// }

export default CarInfo;