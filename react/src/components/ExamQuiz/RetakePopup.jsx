
import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Link } from 'react-router-dom';

const RetakePopup = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} centered>
      <div className='retake-popup text-center'>
        <p className='retake-popup-head'>Are you sure you want to Submit?</p>
        <p className='retake-popup-para'>Submitting ends the quiz & no more
          changes will be allowed</p>
        <div className='d-flex justify-content-center'>
          <button className='common-btn  score-btn retake-cancel' onClick={props.toggle}>Cancel</button>
          <Link to="/score" class="common-btn red score-btn">Submit</Link>
        </div>
      </div>
    </Modal>
  )
}

export default RetakePopup