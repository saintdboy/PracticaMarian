import './App.css';
import { SearchFlights } from './Services/SearchFlightsService';
import React from 'react';
import FlightData from './Components/FlightData';
import Loading from './Components/Loading';
import { Container, Row, Col } from 'react-bootstrap';
class App extends React.Component {
  styles = {}
  state = {
    flightData: [],
    loading: true
  }

  componentDidMount() {
    SearchFlights().then(x =>
      this.setState({
        flightData: x.data,
        loading: false
      })
    )
  }

  renderLoading() {
    if (this.state.loading)
      return <Loading></Loading>;
    else
      return;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col> {this.renderLoading()}
            {
              //Iteramos los viajes y mostramos el id y el precio en un H1
              this.state.flightData?.map(x => <div>
                <FlightData data={x}></FlightData>
              </div>)
            }</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
