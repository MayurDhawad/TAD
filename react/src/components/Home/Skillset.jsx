import React, { useState } from 'react'
import SkillsetCard from './SkillsetCard'

const Skillset = (props) => {

  const [skills] = useState([
    {
      title: "UX/UI Design Certification",
      description: "Advance you design career with expert mentors and industry specific curriculum.",
      date: "22nd Apr 2023",
      badge: "Trending",
      img: "ui-ux-ur.jpg",
      link: "ux-ui-design-certification"
    },
    {
      title: "Web Development program",
      description: "Become a web development pro with our advanced web development course.",
      date: "22nd Apr 2023",
      badge: "Trending",
      img: "html-css-js.jpg",
      link: "web-development-program"
    },
    {
      title: "NodeJS & ReactJS",
      description: "Unlock the power of Full-Stack development and build dynamic web applications",
      date: "22nd Apr 2023",
      badge: "Trending",
      img: "js-nodejs-reactjs.jpg",
      link: "nodejs-reactjs"
    },
    {
      title: "NodeJS & Angular",
      description: "Unlock the power of Full-Stack development and build dynamic web applications",
      date: "22nd Apr 2023",
      badge: "Sold Out",
      img: "js-nodejs-angular.jpg",
      link: "nodejs-angular"
    }
  ]);

  return (
    <div className='container skillset-main'>
      <div className="row">
        <div className="col-12 skillset-head">
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </div>
        <div className="col-12 skillset-card-main">
          <div className="row">
            {
              skills.map((skill, index) => (<SkillsetCard skill={skill} key={index} />))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skillset
