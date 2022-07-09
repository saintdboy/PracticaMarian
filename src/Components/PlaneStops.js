import React from 'react';

class PlaneStops extends React.Component {
  segments = null;
  constructor(props) {
    super(props);
    this.segments = props.segments;
  }
  render() {
    return (<div>
      <h3>Escalas</h3>
      <table class="table">
        <thead>
        </thead>
        {//Iteramos los segmenos si tiene (o sea, las escalas)
          this.segments?.map(s =>
            <tbody>
              <tr>
                <td>Salida:
                </td>
                <td>
                  {s?.departure?.iataCode} - {s.departure?.at} </td>
                <td>Llegada:
                </td>
                <td>
                  {s?.arrival?.iataCode} - {s.arrival?.at} </td>

                <td>Nave:</td><td> {s?.aircraft?.code}</td>
              </tr>
            </tbody>)
        }
      </table></div>
    );
  }
}
export default PlaneStops;
