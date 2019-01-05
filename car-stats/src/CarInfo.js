import React, { Component } from 'react';


class CarInfo extends Component {
  state = { car: null }
  componentDidUpdate() {
    const { make } = this.props.cars
    // console.log('WE WANT TO FETCH INFO')
    // const url = 'http://localhost:5000/'
    fetch(make)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ car: json })
      })
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps.cars)
    // console.log(this.props.cars)

    // This line is the same as the expression below:
    return (nextProps.cars !== this.props.cars)

    // if (nextProps.cars !== this.props.cars) {
    //   return true
    // } else {
    //   return false
    // }

  }
  render() {
    console.log(this.props)
    if (this.state.car) {
      const { id, make, engine, model } = this.state.car
      return (
        <div>
          <h3>More Info:</h3>
          <p>{id}: {make}</p>
          <p>Model: {model} | Engine: {engine}</p>
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