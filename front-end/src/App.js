import React, { Component } from 'react';
import './App.css'
import CarInfo from './CarInfo'
import CarPics from './CarPics'
import About from './About'
import Cars from './Cars'
import Car from './Car'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {
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
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Cars} />
          <Route exact path="/cars" component={Cars} />
          <Route path="/cars/:id" component={Car} />
          <Route path="/info" component={CarInfo} />
          <Route path="/about/" component={About} />
          <Route path="/pics/" component={CarPics} />
        </div>
      </BrowserRouter>
    )
    
    // const { pathname } = window.location;
    // const params = pathname.substr(1)
    // // console.log(params)
    
    // if(params === 'home' || params === '') {
    // return (
    //   <div className="App">
    //   <h1>Welcome to Car-Stats!</h1><hr/>
    //   { this.state.cars.map((car, index) => <h3 key={index} onClick={() => this.handleCarInfo(car)}>{car.make}</h3>) }
    //   { this.state.selected && <CarInfo cars={this.state.selected} /> }    
    //   </div>
    // )
    // } else if(params === 'pics') {
    //   // render carPics component
    //   return <CarPics /> 
    // } else if (params === 'about') {
    //   // render about component
    //   return <About />
    // } else {
    //   return <p>Unknown Path</p>
    // }
  }
}

export default App;
