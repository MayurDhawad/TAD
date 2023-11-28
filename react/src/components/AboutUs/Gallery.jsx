import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Gallery = () => {
  return (
    <div className='gallery'>

      <Container>
        <p className='common-title'>Gallery</p>
        <Row className='gallery-main'>
          <Col lg="5" className='gallery-card large'>
            <img className='d-lg-block d-none' src={require('../../assets/images/about/gallery-1.jpg')} alt="gallery" />
            <img className='d-lg-none d-block' src={require('../../assets/images/about/gallery-1-mob.jpg')} alt="gallery" />
          </Col>
          <Col lg="7" className='gallery-card'>
            <Row className='right-section'>
              <Col lg="12" className='gallery-card'>
                <img className='d-lg-block d-none' src={require('../../assets/images/about/gallery-2.jpg')} alt="gallery" />
                <img className='d-lg-none d-block' src={require('../../assets/images/about/gallery-2-mob.jpg')} alt="gallery" />
              </Col>
              <Col xs="6" className='gallery-card mob-sm'>
                <img src={require('../../assets/images/about/gallery-3.jpg')} alt="gallery" />
              </Col>
              <Col xs="6" className='gallery-card mob-sm'>
                <img src={require('../../assets/images/about/gallery-4.jpg')} alt="gallery" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery