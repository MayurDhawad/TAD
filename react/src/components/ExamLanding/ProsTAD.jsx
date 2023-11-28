import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import HireTadOffer from '../HireFromUs/HireTadOffer';

const ProsTAD = () => {
    const [tadOffers] = useState([
        {
            offer: "Access premium courses with TAD"
        },
        {
            offer: "Learn from industry leaders & experts"
        },
        {
            offer: "Gain globally-recognized certifications"
        },
        {
            offer: "Increase your chances of landing better job opportunities"
        },
        {
            offer: "Boost your career prospects with new skills"
        },
      ]);
  return (
    <Container>
    <Row className='contact-main-wrapper hire-contact-main-wrapper pros-tad-main-wrapper'>
    <Col lg="6">
        <img src={require('../../assets/images/exam-landing/prostad.png')}/>
    </Col>
      <Col lg="6">
        <div className='hire-offer-info pros-tad-exam'>
          <h3>Pros of Taking the TAD Entrance Exam</h3>
          <ul>
            {
              tadOffers.map((tadoffer, index) => (<HireTadOffer tadoffer={tadoffer} key={index} />))
            }
          </ul>
        </div>
      </Col>
      
    </Row>
  </Container>
  )
}

export default ProsTAD