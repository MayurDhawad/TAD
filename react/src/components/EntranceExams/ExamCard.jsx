import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import ExamStatusCard from './ExamStatusCard';
import GuidelinePopup from './GuidelinePopup';

const ExamCard = (props) => {

    const [guidelinePopup, setGuidelinePopup] = useState(false);

    const toggleGuidelinePopup = () => setGuidelinePopup(!guidelinePopup);

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const deadline = "April, 31, 2023";
    const { exam } = props;

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className={'exam-card-main ' + (exam.completed ? "exam-status-main" : "")}>

{
    exam.completed ? (   <ExamStatusCard status={exam.status} />) : (

        <Row>
        <Col xs="12">
            <p className='exam-title'>{exam.title}</p>
            <p className='exam-desc'>{exam.desc}</p>
        </Col>
        <Col sm="5">
            <p className='attempts'><span className='attempts-count'>{exam.attemptsLeft}</span> Attempts left</p>
            <p className='remaining-txt'>Time remaining to appear for entrance exam</p>
            <div className='exam-timer'>
                <div className='timer-item'>
                    <div className='timer-box'>{days < 10 ? ("0" + days) : days}</div>
                    <p className='timer-unit'>Days</p>
                </div>
                <div className='timer-item'>
                    <div className='timer-box'>{hours < 10 ? ("0" + hours) : hours}</div>
                    <p className='timer-unit'>Hours</p>
                </div>
                <div className='timer-item'>
                    <div className='timer-box'>{minutes < 10 ? ("0" + minutes) : minutes}</div>
                    <p className='timer-unit'>Min</p>
                </div>
                <div className='timer-item'>
                    <div className='timer-box'>{seconds < 10 ? ("0" + seconds) : seconds}</div>
                    <p className='timer-unit'>Sec</p>
                </div>
            </div>
            <div className='start-test'>
                <button className='common-btn red' onClick={toggleGuidelinePopup}>Start Test</button>
                <GuidelinePopup isOpen={guidelinePopup} toggle={toggleGuidelinePopup} />
            </div>

        </Col>
        <Col sm="7" className='d-md-block d-none'>
            <img className='exam-img' src={require('../../assets/images/exam/' + exam.bannerImg)} alt={exam.title} />
        </Col>
    </Row>
    )
}

         

         
        </div>
    )
}

export default ExamCard