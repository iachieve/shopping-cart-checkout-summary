import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';
import chair from '../assets/chair.jpeg';
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  render() {
    return (
      <div>
        <Button className="item-detail-button"
          variant='link'
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <Media>
            <img width={100} height={100}
              src={chair}
              alt='product'
            >
            </img>
            <Media.Body>
              <p>
                Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red
              </p>
              <Row className='show-grid'>
                <Col md={6}><strong>{`$${this.props.price}`}</strong>
                  <br />
                  <strong className='price-strike'>{`$${this.props.price}`}</strong>
                </Col>
                <Col md={6}>
                Qty: 1
                </Col>
              </Row>
            </Media.Body>
          </Media>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;