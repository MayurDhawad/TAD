import React from 'react'
import { Col, Modal, ModalBody, Row } from 'reactstrap'

const BatchPopup = (props) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} centered size='xl'>

            <ModalBody className='p-0'>
                <div className='batch-popup'>
                    <div className='heading'>
                        <span className='close' onClick={props.toggle}>
                            <img src={require('../../assets/images/home/leadgen-popup/popup-close.svg').default} alt="close" />
                        </span>
                        <p className='title'>Upcoming Batches</p>
                    </div>
                    <Row className='batch-wrapper'>
                        {
                            props.batches && props.batches.map((batch, index) => (
                                <Col lg="4" key={index}>
                                    <div className='upcoming-date-main' >
                                        <div className='date'>
                                            <p>{batch.date}<span>{batch.month}</span></p>
                                        </div>
                                        <p className='course-name'>{props.courseName}</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default BatchPopup