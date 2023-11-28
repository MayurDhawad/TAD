import React, { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardLink, CardText, CardTitle } from 'reactstrap'
import EnrollNowModal from "../Common/EnrollNowModal";
import { Link } from "react-router-dom";

const SkillsetCard = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className='col-lg-3 col-md-6 skillset-card'>
        <Card>
          <CardHeader>
            <img src={require("../../assets/images/home/skillset/" + props.skill.img)} alt="skill" />
            <div className='skill-badge'>
              <div>{props.skill.badge}</div>
            </div>
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">{props.skill.title}</CardTitle>
            <CardText>{props.skill.description}</CardText>
            <div className='course-date'><span>New course starts from: </span>
              <div className='d-flex align-items-center'>
                <img src={require("../../assets/images/icons/calendar.svg").default} alt="calendar" />
                {/* {props.skill.date} */} Coming Soon
              </div>
            </div>
            <CardText className='entrance'>Give entrance test to Enroll</CardText>
          </CardBody>
          <CardFooter className='p-0'>
            <Link className='card-link'
              to={"/course/" + props.skill.link}
            // onClick={toggle}
            >
              View Course Details
            </Link>
          </CardFooter>
        </Card>
      </div>
      <EnrollNowModal modal={modal} toggle={toggle} />
    </>
  )
}

export default SkillsetCard
