import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ExamBannerForm from './ExamBannerForm'

const ExamBanner = () => {
    return (
        <div className='exam-landing'>
            <Container fluid>

                <Container>
                    <div className='landing-main'>
                        <Row>
                            <Col xl="6">
                                <div className='landing-title'>
                                    <h1>Start your learning journey</h1>
                                    <img src={require('../../assets/images/exam-landing/brandman.png')} />
                                </div>
                            </Col>
                            <Col xl="6">
                                <div className='landing-form-scan'>
                                    <ExamBannerForm/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </Container>
        </div>
    )
}

export default ExamBanner