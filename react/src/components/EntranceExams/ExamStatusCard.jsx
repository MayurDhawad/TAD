import React from 'react'
import congratsimg from '../../assets/images/exam/congrats.svg'
import failedimg from '../../assets/images/exam/sorry.svg'
import timeoverimg from '../../assets/images/exam/timeover.svg'
// import img from './/'

const ExamStatusCard = (props) => {

    const { status } = props;

    return (
        <div className='exam-status'>
            {
                status === 'congrats' ? (
                    <>
                        <img src={congratsimg} />
                        <h2>Congratulations!</h2>
                        <p>You passed the TAD Entrance Exam. Kudos for your tireless efforts!
                            Get ready to embark on your learning journey.</p>
                        <p>Our team will be in touch with you soon.</p>
                    </>
                ) : null
            }

            {
                status === 'failed' ? (
                    <>
                        <img src={failedimg} />
                        <h2>Sorry!</h2>
                        <p>We're sorry to inform that you’ve exhausted all three attempts for this exam. However, don't lose heart as you can try again after a period of 3 months. Best of luck for your next attempt!</p>
                        <p>Please note these attempts are paid. To find out more, kindly get in touch with our counselor at counsellor@tadcourses.com.</p>
                    </>
                ) : null
            }

            {
                status === 'timeover' ? (
                    <>
                        <img src={timeoverimg} />
                        <h2>Time over!!</h2>
                        <p>Oops! Looks like your time is over. Unfortunately you have not completed the exam within the allotted 7 days.</p>
                        <p>Please contact our counselor at counsellor@tadcourses.com for more information.</p>
                    </>
                ) : null
            }

        </div>
    )
}

export default ExamStatusCard