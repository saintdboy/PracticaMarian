import './App.css';
import { SearchFlights } from './Services/SearchFlightsService';
import React from 'react';

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
              <h2>Viaje id: {x?.id} - Precio US: {x?.price?.total}</h2>
              {//Iteramos los itinerarios y mostramos la duracion en un h3
                x?.itineraries?.map(i => <div>
                  <h3>Duración: {i?.duration}</h3>
                  <ul>
                    {//Iteramos los segmenos si tiene (o sea, las escalas)
                    i?.segments?.map(s => <li key={s.id}>
                      Salida: {s?.departure?.iataCode} - {s.departure?.at} <br></br>
                      Llegada: {s?.arrival?.iataCode} - {s.arrival?.at} <br></br>
                      Nave: {s?.aircraft?.code} <br></br>
                    </li>)}
                  </ul>
                </div>
                )}
            </div>)}
        </header>
      </div>
    );
  }
}
export default App;
