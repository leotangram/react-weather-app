import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Bogota,co',
  'Buenos Aires,ar',
  'Ciudad de méxico,mx',
  'Washington,us',
  'Madrid,es',
  'Lima,pe'
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} />
      </div>
    );
  }
}

export default App;
