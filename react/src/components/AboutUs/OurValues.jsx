import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const OurValues = () => {
  return (
    <div className='our-values'>
      <Container>
        <p className='common-title'>Our Values</p>
        <p className='description'>Digital education is for every tech enthusiast</p>
        <Row>
          <Col xs="4">
            <div className='value-card'>
              <img className='value-img' src={require('../../assets/images/about/passion.svg').default} alt='value' />
              <p className='value-title'>Passion</p>
              <p className='value-description'>We are driven by the passion to deliver premium digital education.</p>
            </div>
          </Col>
          <Col xs="4">
            <div className='value-card'>
              <img className='value-img' src={require('../../assets/images/about/learning.svg').default} alt='value' />
              <p className='value-title'>Continuous Learning</p>
              <p className='value-description'>Our courses align with the latest digital trend and market demand</p>
            </div>
          </Col>
          <Col xs="4">
            <div className='value-card'>
              <img className='value-img' src={require('../../assets/images/about/quality.svg').default} alt='value' />
              <p className='value-title'>High Quality</p>
              <p className='value-description'>Our world-class mentors offer top-quality learning experience making learners industry ready</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OurValues