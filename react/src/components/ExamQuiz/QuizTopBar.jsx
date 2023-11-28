import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import RetakePopup from './RetakePopup';

const QuizTopBar = (props) => {

    const { statusList, minutes, seconds,timeOver } = props;
    const skipped = statusList.filter((data) => (data.status === "skipped"));
    const attempted = statusList.filter((data) => (data.status === "attempted"));

    const [retakePopup, setRetakePopup] = useState(false);
    const toggleRetakePopup = () =>  setRetakePopup(!retakePopup);

    return (
        <Container>
            <Row className='quiz-top-bar' >
                <Col xl="1" lg="4" xs="4">
                    <p className='q-count'>{props.indexNo + 1}/50</p>
                </Col>
                <Col xl="6" lg="12" xs="12" className='q-counter'>
                    <div className='q-count-wrapper'>
                        <p className='q-count-badge'>Questions Skipped: {skipped.length}/50</p>
                        <p className='q-count-badge'>Questions Attempted: {attempted.length}/50</p>
                    </div>
                </Col>
                <Col xl="5" lg="8" xs="8">
                    <div className='timer-wrapper'>
                        <Button className='common-btn red' onClick={toggleRetakePopup}>Finish Quiz</Button>
                        <div className='exam-timer'>
                            <img src={require('../../assets/images/exam-quiz/timer-icon.svg').default} alt="timer" />

                            {
                                timeOver ? (<p>00:00</p>) : (
                                    <p>
                                        {minutes < 10 ? ("0" + minutes) : minutes}:
                                        {seconds < 10 ? ("0" + seconds) : seconds}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            <RetakePopup isOpen={retakePopup} toggle={toggleRetakePopup}/>
        </Container >
    )
}

export default QuizTopBar