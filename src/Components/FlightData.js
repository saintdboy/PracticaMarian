import React from 'react';
import Itineraries from './Intineraries';

class FlightData extends React.Component {
  data = null;
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render() {
    return (
      <div>
        <h2>Viaje id: {this.data?.id} - Precio US: {this.data?.price?.total}</h2>
        <Itineraries itinerary={this.data?.itineraries}></Itineraries>
      </div>
    );
  }
}
export default FlightData;
