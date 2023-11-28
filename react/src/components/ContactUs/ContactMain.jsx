import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm"; 

const ContactMain = () => {
  return (
    <Container>
      <Row className='contact-main-wrapper'>
        <Col lg="4"><ContactDetails/></Col>
        <Col lg="8"><ContactForm/></Col>
      </Row>
    </Container>
  )
}

export default ContactMain