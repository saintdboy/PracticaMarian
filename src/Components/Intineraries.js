import React from 'react';
import PlaneStops from './PlaneStops';

class Itineraries extends React.Component {
  itinerary = null;
  constructor(props) {
    super(props);
    this.itinerary = props.itinerary;
  }
  render() {
    return (
      <div>
        {//Iteramos los itinerarios y mostramos la duracion en un h3
          this.itinerary?.map(i => <div>
            <h3>Duración: {i?.duration}</h3>
            <PlaneStops segments={i?.segments}></PlaneStops>
          </div >
          )
        }</div>
    );
  }
}
export default Itineraries;
