import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const OurMission = () => {
  return (
    <div className='our-mission'>
      <Container>
        <p className='common-title sm'>Our Mission</p>
        <div className='our-mission-main'>
          <img src={require('../../assets/images/about/our-mission.jpg')} alt="our-vision" className='mission-img d-lg-block d-none' />
          <img src={require('../../assets/images/about/our-mission-mob.jpg')} alt="our-vision" className='mission-img d-lg-none d-block' />

          <div className='our-mission-content'>
            <p className='our-mission-txt'>
              <span>To empower</span> learners with the necessary knowledge and <br />expertise, making them highly skilled industry professionals.
            </p>
            <p className='our-mission-txt'>
              To offer <span>world-class mentorship</span>, cultivating a deep understanding <br />of the latest industry trends and practices among the learners.
            </p>
            <p className='our-mission-txt'>
              To offer an inclusive learning approach that <span>breaks the <br />barriers of language</span> in the learning process.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OurMission