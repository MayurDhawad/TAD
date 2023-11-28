import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const KeepGrowing = () => {
  return (
    <div className='keep-growing'>
      <p className='common-title'>We just keep growing</p>
      <Container>
        <Row className='stats-wrapper'>
          <Col lg="3" xs="6">
            <div>
              <p className='stats-title'>100+</p>
              <p className='stats-desc'>Hiring Partners</p>
            </div>
          </Col>
          <Col lg="3" xs="6">
            <div>
              <p className='stats-title'>1K+</p>
              <p className='stats-desc'>Placements</p>
            </div>
          </Col>
          <Col lg="3" xs="6">
            <div>
              <p className='stats-title'>200+</p>
              <p className='stats-desc'>Industry Experts</p>
            </div>
          </Col>
          <Col lg="3" xs="6">
            <div>
              <p className='stats-title'>6</p>
              <p className='stats-desc'>Languages</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default KeepGrowing