import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import quizData from '../../quizData';
import congratsimg from '../../assets/images/exam/congrats.svg'

const QuizQuestion = (props) => {

    const { quiz, indexNo, setActiveQuestion, handleStatus, timeOver } = props;
    const dataLength = quizData.length;

    const [selected, setSelected] = useState("");

    useEffect(() => {
        setSelected("");
    }, [indexNo]);

    return (
        <Container>
            <div className='quiz-question-main'>

                {
                    timeOver ? (
                            <div className='options-wrapper'>
                                <div className='times-up'>
                                    <img src={require('../../assets/images/exam/sorry.svg').default} />
                                    <h2>Sorry!</h2>
                                    <p>We're sorry to inform that you’ve exhausted all three attempts for this exam. However, don't lose heart as you can try again after a period of 3 months. Best of luck for your next attempt!</p>
                                    <button className='common-btn red'>Continue</button>
                                </div>
                            </div>
                    ) : (
                        <>
                            <p className='question'>Q.{indexNo + 1} {quiz.question}</p>
                            <div className='options-wrapper'>
                                {
                                    quiz.options.map((option, index) => (
                                        <button key={index}
                                            className={'quiz-option ' + (selected === ((index + 1) + option) ? "active" : "")}
                                            onClick={() => setSelected((index + 1) + option)}
                                        >
                                            {(index + 1) + option}
                                        </button>
                                    ))
                                }
                            </div>
                            <div className='q-nav-controls'>
                                {
                                    indexNo > 0 ? (
                                        <button className='common-btn outline' onClick={() => setActiveQuestion(indexNo - 1)}>Previous</button>
                                    ) : null
                                }
                                <div className='q-pages'>
                                    <button className="active">{indexNo + 1}</button>
                                    {indexNo < dataLength - 1 ? (<button>{indexNo + 2}</button>) : null}
                                    {indexNo < dataLength - 2 ? (<button>{indexNo + 3}</button>) : null}
                                    {indexNo < dataLength - 3 ? (<button>{indexNo + 4}</button>) : null}
                                </div>
                                {
                                    indexNo < dataLength - 1 ? (
                                        <button className='common-btn red'
                                            onClick={() => {
                                                setActiveQuestion(indexNo + 1);
                                                handleStatus({
                                                    indexNo,
                                                    status: selected ? "attempted" : "skipped",
                                                });
                                            }}
                                        >Next</button>
                                    ) : null
                                }

                            </div>
                        </>
                    )
                }
            </div>
        </Container>
    )
}

export default QuizQuestion