import React from 'react';
import Itineraries from './Intineraries';
import { Spinner } from 'react-bootstrap';

class Loading extends React.Component {
  render() {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
}
export default Loading;
