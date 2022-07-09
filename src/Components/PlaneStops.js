import React from 'react';

class PlaneStops extends React.Component {
  segments = null;
  constructor(props){
    super(props);
    this.segments = props.segments;
  }
  render() {
    return (
      <ul>
        {//Iteramos los segmenos si tiene (o sea, las escalas)
          this.segments?.map(s => <li key={s.id}>
            Salida: {s?.departure?.iataCode} - {s.departure?.at} <br></br>
            Llegada: {s?.arrival?.iataCode} - {s.arrival?.at} <br></br>
            Nave: {s?.aircraft?.code} <br></br>
          </li>)}
      </ul>
    );
  }
}
export default PlaneStops;
