import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class TaxesFees extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>Est. taxes & fees (Based on 94005)</Col>
        <Col md={6}>{`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}

export default TaxesFees;