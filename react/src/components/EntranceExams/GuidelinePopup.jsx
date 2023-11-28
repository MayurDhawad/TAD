import React from 'react';
import { Modal, ModalBody, } from 'reactstrap';
import {Link} from 'react-router-dom';

const GuidelinePopup = (props) => {
  return (
      <Modal size='lg' isOpen={props.isOpen} toggle={props.toggle} centered>
        <div className='guidline-modal'>
        <div className='guidline-header'>
            <h2>Ace T.E.E With These Simple Tips</h2>
        </div>
        <button onClick={props.toggle} className='close-icon'> <img src={require('../../assets/images/exam/PlusCircle.svg').default} /></button>
        <ModalBody className='p-0'>
            <div className='guidline-body'>
                <ul>
                    <li><p>Duration: 1 hour</p></li>
                    <li><p>Good internet connection required</p></li>
                    <li><p>l There are 50 questions in total: 30 subject matter questions and 20 aptitude questions</p></li>
                    <li><p>Multiple alt tabs will be traced</p></li>
                    <li><p>Avoid any inappropriate activities</p></li>
                    <li><p>Keep your cameras on</p></li>
                    <li><p>Email a screenshot at (xxyz@gmail.com) in case of any technical issues</p></li>
                </ul>
                <div className='let-start text-center'>
                <Link to="/exam-quiz" class="common-btn red">Let’s Start</Link>
                </div>
            </div>
        </ModalBody>

        </div>
      </Modal>
  )
}

export default GuidelinePopup