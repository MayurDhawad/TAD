import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import ContactForm from '../ContactUs/ContactForm'
import HireForm from './HireForm'
import HireTadOffer from './HireTadOffer'

const HireGetInTouch = () => {
  const [tadOffers] = useState([
    {
        offer: "Reduced hiring time by 80%"
    },
    {
        offer: "A pool of pre-qualified candidates"
    },
    {
        offer: "Round the year availability of candidates"
    },
    {
        offer: "Reduced hiring cost"
    },
    {
        offer: "Zero training cost"
    },
    {
        offer: "TAD verified profiles"
    },
  ]);

  return (
    <Container>
      <Row className='contact-main-wrapper hire-contact-main-wrapper'>
        <Col lg="6">
          <div className='hire-offer-info'>
            <h3>What TAD has to offer</h3>
            <ul>
              {
                tadOffers.map((tadoffer, index) => (<HireTadOffer tadoffer={tadoffer} key={index} />))
              }
            </ul>
          </div>
        </Col>
        <Col lg="6"><HireForm/></Col>
      </Row>
    </Container>
  )
}

export default HireGetInTouch
