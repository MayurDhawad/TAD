import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const OurVision = () => {
  return (
    <div className='our-vision'>
      <Container>
        <Row className='our-vision-main'>
          <Col xl="6">
            <img src={require('../../assets/images/about/our-vision.jpg')} alt="our-vision" className='vision-img' />
            {/* <img src={require('../../assets/images/about/our-vision-mob.jpg')} alt="our-vision" className='vision-img d-lg-none d-block' /> */}
          </Col>
          <Col xl="6">
            <p className='common-title sm'>Our Vision</p>
            <p className='description'>To be positioned as the top e-learning brand that upskill learners through live and interactive sessions from world-class mentors.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OurVision