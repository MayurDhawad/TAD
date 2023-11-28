import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap'
import QrPopup from './QrPopup';

const Banner = (props) => {

    const { details , course} = props;

    const [qrPopup, setQrPopup] = useState(false);
    const toggleQrPopup = ()=>{
        setQrPopup(!qrPopup);
    }

    return (
        <div className='course-banner-wrapper'>
            <Container className='course-banner'>
                <Row>
                    <Col lg="8">
                        <h1 className='course-title'>{details.name}</h1>
                        <p className='course-description'>{details.description}</p>
                        <div className='course-details'>
                            <div className='details-item'>
                                <p className='details-title'>Duration</p>
                                <p className='details-value'>{details.duration}</p>
                            </div>
                            <div className='details-item'>
                                <p className='details-title'>Language</p>
                                <p className='details-value'>{details.language}</p>
                            </div>
                            <div className='details-item'>
                                <p className='details-title'>Students</p>
                                <p className='details-value'>{details.students}</p>
                            </div>
                            <div className='details-item'>
                                <p className='details-title'>Mode of training</p>
                                <p className='details-value'>{details.mode}</p>
                            </div>
                        </div>
                        <Row className='entrance-details'>
                            <Col lg="6">
                                <div className='entrance-exam-main'>
                                    <div>
                                        <p className='entrance-text mb-2'>Appear for the exam</p>
                                        <p className='entrance-text'>
                                            <span className='rupee'>₹</span>{details.entranceExam}
                                        </p>
                                    </div>
                                    {/* <Link className='common-btn red small' 
                                    to={'/entrance-landing/'+course} 
                                    disabled={!details.available}>Apply Now</Link> */}
                                    <Button className='common-btn red small' 
                                    onClick={toggleQrPopup}
                                    disabled={!details.available}>Apply Now</Button>
                                    <QrPopup isOpen={qrPopup} toggle={toggleQrPopup} />
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className='entrance-badge'>
                                    <img src={require('../../assets/images/icons/course-pointer.svg').default} alt="entrance" />
                                    <p>Must clear entrance exam to enroll</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="4"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner