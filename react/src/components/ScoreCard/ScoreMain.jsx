import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "reactstrap";

const ScoreMain = () => {

  return (
    <div>
        <Container>
            <div className='score-card text-center'>
            <img className='congratulation-img' src={require("../../assets/images/score-card/congratulation-img.svg").default}/>
            {/* <img className='congratulation-img' src={require("../../assets/images/score-card/sorry-img.svg").default}/> */}
            <p className='cong-head'>Congratulations!</p>
            {/* <p className='cong-head'>Sorry!</p> */}
            {/* <p className='cong-head'>Better Luck Next Time!</p> */}
            {/* <p className='cong-para'>You passed the TAD Entrance Exam with flying colors. Your hard work has paid off and you are now one step
            closer to achieving your goals.</p> */}

            {/* <p className='cong-para'>Don't be disheartened, failure is a part of the learning process. We Wish to see you again next time but with some additional effort and preparation. Better Luck Next Time!</p> */}

            <p className='cong-para'>We're sorry to inform that you’ve exhausted all three attempts for this exam. However, don't lose heart as you can try again after a period of 3 months. Best of luck for your next attempt!</p>

            <div className='score'>
                <p className='score-count'>40</p>
                <div className='score-line'></div>
                <p className='score-count'>50</p>
            </div>

           
             <p className='attempts justify-content-center'><span className='attempts-count'>2</span> Attempts left</p>
           
            <div className='question'>
                    <Row>
                        <Col lg="3" md="12" xs="12"  className='question-card mobile-question-card'>
                            
                           <p className='question-head'>Total Questions</p>
                           <p className='question-score'>50</p>
                          
                        </Col>
                        <Col  lg="3" md="4" xs="4" className='question-card'>
                     
                            <p className='question-head'>Correct</p>
                            <p className='question-score'>40</p>
                    
                        </Col>
                         <Col lg="3" md="4" xs="4" className='question-card'>
                        
                            <p className='question-head'>Wrong</p>
                            <p className='question-score'>10</p>
                    
                        </Col>
                        <Col lg="3" md="4" xs="4" className='question-card'>
                      
                        <p className='question-head'>Skipped</p>
                        <p className='question-score'>05</p>
                    
                        </Col>
                    </Row>
            </div>

            <Link to='/entrance-exam' className='common-btn red score-btn'>Continue</Link>
            
            </div>
        </Container>
    </div>
  )
}

export default ScoreMain