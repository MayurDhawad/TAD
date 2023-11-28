import React, { useState } from 'react';
import { Container } from 'reactstrap';
import SkillMasteryStep from './SkillMasteryStep';

const SkillMastery = () => {

    const [skills] = useState([
        {
            index: "01",
            icon: "skill-mastery-1.svg",
            description: "Sign up for TAD Entrance exam"
        },
        {
            index: "02",
            icon: "skill-mastery-2.svg",
            description: "Get Qualified"
        },
        {
            index: "03",
            icon: "skill-mastery-3.svg",
            description: "Enroll & Get started"
        },
    ]);

    return (
        <Container className='skill-mastery-main' fluid>
            <div className="row">
                <div className="col-12 skill-mastery-head">
                    <h2>Three step skill mastery</h2>
                    <p>Acquire skills in three simple steps</p>
                </div>
                <div className="col-12 skill-mastery-card-main">
                    {
                        skills.map((skill, index) => (<SkillMasteryStep skill={skill} key={index} />))
                    }
                </div>
            </div>
        </Container>
    )
}

export default SkillMastery