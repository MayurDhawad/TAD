import React from 'react'

const MentorCard = (props) => {
    return (
        <div className='mentor-card-main'>

            <div className='mentor-wrapper'>
                <div className='mentor-img'>
                    <img src={require('../../assets/images/home/mentor/' + props.mentor.img)} alt={props.mentor.name} />
                    <div className='mentor-quote'>{props.mentor.quote}</div>
                </div>
                <div className='mentor-name'>{props.mentor.name}</div>
                <div className='mentor-desc'>{props.mentor.desc}</div>
            </div>

        </div>
    )
}

export default MentorCard