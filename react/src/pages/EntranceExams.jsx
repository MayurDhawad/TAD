import React, { useState } from 'react'
import { Container } from 'reactstrap';
import ExamCard from '../components/EntranceExams/ExamCard';
import LandingLayout from "../layouts/LandingLayout";

const EntranceExams = () => {

    const [examList] = useState([
        {
            title:"UX/UI Design Certification",
            desc:"Ready to prove your skills in UI/UX design? Take the TAD Entrance Exam and pave the way toward your dream career",
            attemptsLeft:3,
            bannerImg:"uiux-exam.svg",
            completed:false,
            status:""
        },
        {
            title:"Web Development Basics",
            desc:"Be ready to take the TAD Entrance Exam to start your journey toward mastering the fundamentals of web development",
            attemptsLeft:2,
            bannerImg:"web-exam.svg",
            completed:true,
            status:"timeover"
        },
        {
            title:"NODEJS & REACT JS",
            desc:"Ready to prove your skills in UI/UX design? Take the TAD Entrance Exam and pave the way toward your dream career",
            attemptsLeft:3,
            bannerImg:"react-exam.svg",
            completed:true,
            status:"congrats"
        },
        {
            title:"NODEJS & Angular",
            desc:"Ready to prove your skills in UI/UX design? Take the TAD Entrance Exam and pave the way toward your dream career",
            attemptsLeft:2,
            bannerImg:"angular-exam.svg",
            completed:true,
            status:"failed"
        },
    ]);

    return (
        <LandingLayout>
            <Container>
                <div className='exam-card-wrapper'>
                    {
                        examList && examList.map((exam,index)=>(
                            <ExamCard exam={exam} key={index} />
                        ))
                    }
                </div>
            </Container>
        </LandingLayout>
    )
}

export default EntranceExams