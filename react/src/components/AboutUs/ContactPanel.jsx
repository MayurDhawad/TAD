import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const ContactPanel = () => {
    return (
        <div className='contact-panel'>
            <Container>
                <Row className='contact-panel-main'>
                    <Col lg="5">
                        <p className='main-txt'>
                            <span>Need Help?</span>
                            Our experts are happy to resolve all your queries.
                        </p>
                    </Col>
                    <Col lg="3">

                        <p className='main-txt text-center'>
                            Reach out to us on
                            <span><a href='tel:+918976812213'>+91-8976812213</a></span>
                        </p>

                    </Col>
                    <Col lg="1"><p className='or-txt'>OR</p></Col>
                    <Col lg="3" className='contact-btn'>
                        <Link to="/contact-us" className='common-btn red'>Get a Call Back</Link>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default ContactPanel