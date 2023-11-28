import React from 'react'
import { Card, CardBody, CardHeader, CardLink, CardText, CardTitle } from 'reactstrap'

const OurLeadersCard = (props) => {
  return (
    <div className='leaders-card'>
      <Card>
        <CardHeader>
          <CardLink href={props.leader.link}>
            <img src={require("../../assets/images/home/leaders/" + props.leader.img)} alt={props.leader.name} />
          </CardLink>
        </CardHeader>
        <CardBody>
          <CardText>{props.leader.description}</CardText>
          <CardTitle tag="h5">{props.leader.name}</CardTitle>
          <CardText className='designation'>{props.leader.designation}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default OurLeadersCard
