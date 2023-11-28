import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Leadership = () => {
  return (
    <div className='our-leadership'>
      <Container>
        <p className='common-title'>Leadership Team</p>
        <Row className='leader-card-wrapper'>
          <Col lg="3">
            <div className='leader-card'>
              <img src={require('../../assets/images/about/mohar-v.jpg')} alt='leader' />
              <p className='leader-title'>Mr. Mohar V.</p>
              <p className='leader-desc'>Co founder & CEO</p>
            </div>
          </Col>
          <Col lg="3">
            <div className='leader-card'>
              <img src={require('../../assets/images/about/neha-m.jpg')} alt='leader' />
              <p className='leader-title'>Neha Mogdil</p>
              <p className='leader-desc'>Co founder & COO</p>
            </div>
          </Col>
          <Col lg="3">
            <div className='leader-card'>
              <img src={require('../../assets/images/about/gulshan-r.jpg')} alt='leader' />
              <p className='leader-title'>Mr. Gulsan Rai</p>
              <p className='leader-desc'>Management & Consultant</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Leadership