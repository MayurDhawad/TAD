import React, { useState } from 'react'
import { Container } from 'reactstrap';
import HowHireStep from './HowHireStep';

const HowHire = (props) => {

  return (
    <Container className={'skill-mastery-main how-hire-main '+ (props.exam ? "exam" : "")} fluid>
      <div className="row">
        <div className="col-12 skill-mastery-head">
          <h2>{props.title}</h2>
        </div>
        <div className="col-12 skill-mastery-card-main">
          {
            props.skills.map((skill, index) => (<HowHireStep skill={skill} key={index} />))
          }
        </div>
      </div>
    </Container>
  )
}

export default HowHire
