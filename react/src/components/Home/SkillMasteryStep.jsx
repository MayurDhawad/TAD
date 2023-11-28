import React from 'react'

const SkillMasteryStep = (props) => {
  return (
    <div className='mastery-step'>
        <div className='step-index'>{props.skill.index}</div>
        <img src={require("../../assets/images/home/mastery/" + props.skill.icon)} alt="skill" />
        <div className='step-desc'>{props.skill.description}</div>
    </div>
  )
}

export default SkillMasteryStep