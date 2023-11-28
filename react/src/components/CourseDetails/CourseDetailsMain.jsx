import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import DetailTabs from './DetailTabs'
import InfoCard from './InfoCard'

const CourseDetailsMain = (props) => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg="8" className='course-tab-section'>
                    <DetailTabs details={props.details} tocData={props.tocData}/>
                </Col>
                <Col lg="4" className='course-info-section'>
                    <InfoCard details={props.details}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CourseDetailsMain