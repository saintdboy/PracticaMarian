import './App.css';
import { SearchFlights } from './Services/SearchFlightsService';
import React from 'react';
import FlightData from './Components/FlightData';
class App extends React.Component {
  styles = {}
  state = {
    flightData: []
  }

  componentDidMount() {
    SearchFlights().then(x =>
      this.setState({
        flightData: x.data
      })
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Data:

          {//Iteramos los viajes y mostramos el id y el precio en un H1
            this.state.flightData?.map(x => <div>
              <FlightData data={x}></FlightData>
            </div>)}
        </header>
      </div>
    );
  }
}
export default App;
