import React from 'react'

const HowHireStep = (props) => {
  return (
    <div className='mastery-step hire-mastery-step'>
        <div className='step-index'>{props.skill.index}</div>
        <div className='step-desc'>{props.skill.description}</div>
    </div>
  )
}

export default HowHireStep
