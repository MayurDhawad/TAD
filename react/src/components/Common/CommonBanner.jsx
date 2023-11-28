import React from 'react'
import { Container } from 'reactstrap'

const CommonBanner = (props) => {
  return (
    <div className={'common-banner ' + props.page}>
      <div className='common-banner-overlay'>
        <Container>
          <p className='title'>{props.title}</p>
          <p className='description'>{props.desc}</p>
          {props.children}
        </Container>
      </div>
    </div>
  )
}

export default CommonBanner