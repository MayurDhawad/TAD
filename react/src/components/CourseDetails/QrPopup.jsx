import React from 'react'
import { Modal, ModalBody } from 'reactstrap'

const QrPopup = (props) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} centered>

            <ModalBody className='p-0'>
                <div className='qr-popup'>
                    <div className='heading'>
                        <span className='close' onClick={props.toggle}>
                            <img src={require('../../assets/images/home/leadgen-popup/popup-close.svg').default} alt="close" />
                        </span>
                    </div>
                    <div className='qr-main'>
                        <p className='title mb-1'>Scan QR Code</p>
                        
                        <p className='desc'>Scan the code for your payment</p>
                        <img src={require('../../assets/images/course-details/qr-code-small.jpeg')}  alt='qr-code'/>
                        <p className='desc'>If you have made the payment, send payment screenshot on 9899934562</p>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default QrPopup