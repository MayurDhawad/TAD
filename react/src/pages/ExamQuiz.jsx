import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap';
import QuizQuestion from '../components/ExamQuiz/QuizQuestion';
import QuizTopBar from '../components/ExamQuiz/QuizTopBar';
import CustomLayout from "../layouts/CustomLayout";
import quizData from '../quizData';

const ExamQuiz = () => {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const [statusList, setStatusList] = useState([]);

    const handleStatus = (item) => {
        const newList = statusList.filter((data) => (data.indexNo !== item.indexNo));
        setStatusList([...newList, item])
    }

    const [minutes, setMinutes] = useState(60);
    const [seconds, setSeconds] = useState(0);
    const deadline = new Date();
    const [timeOver, setTimeOver] = useState(false);

    const getTime = (deadline) => {
        if(!timeOver){
            const time = deadline.setHours(deadline.getHours() + 1) - Date.now();
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    let interval;

    useEffect(() => {
        interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        if (minutes === 0 && seconds === 0) {
            setTimeOver(true);
        }
    }, [minutes, seconds])

    return (
        <CustomLayout noFooter examNav>
            <QuizTopBar indexNo={activeQuestion}
                minutes={minutes} seconds={seconds}
                statusList={statusList}
                timeOver={timeOver}
            />
            <QuizQuestion
                quiz={quizData[activeQuestion]}
                indexNo={activeQuestion}
                setActiveQuestion={setActiveQuestion}
                handleStatus={handleStatus}
                timeOver={timeOver}
            />
            <Container>
                <div className='quiz-warning'>
                    <img src={require('../assets/images/exam-quiz/bi-info.svg').default} />
                    <p>Please note copying, switching tabs, or accessing other websites during the exam will result in disqualification</p>
                </div>
            </Container>

        </CustomLayout>
    )
}

export default ExamQuiz