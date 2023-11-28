import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'
import EnrollNowModal from './EnrollNowModal';

const MainFooter = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='footer-main'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-4 footer-logo'>
            <img src={require("../../assets/images/logo.png")} alt="TAD Logo" />
          </div>
          <div className='col-md-12 col-lg-8 footer-menu'>
            <h2>Certified Courses</h2>
            <ul>
              <li><Link to="/course/ux-ui-design-certification">UX/UI Design Certification</Link></li>
              <li><Link to="/course/web-development-program">Web Development Program</Link></li>
              <li><Link to="/course/nodejs-reactjs">NodeJS & ReactJS</Link></li>
              <li><Link to="/course/nodejs-angular">NodeJS & Angular</Link></li>
            </ul>
            <div className='d-flex align-items-center'>
              <Button type="button" className="common-btn red" onClick={toggle}>Enroll Now</Button>
              <EnrollNowModal modal={modal} toggle={toggle} />
              <div className='footer-social d-none d-lg-block'>
              <ul>
                <li><a href='/'><img src={require("../../assets/images/icons/facebook.svg").default} alt="facebook" /></a></li>
                <li><a href='/'><img src={require("../../assets/images/icons/twitter.svg").default} alt="twitter" /></a></li>
                <li><a href='/'><img src={require("../../assets/images/icons/youtube.svg").default} alt="youtube" /></a></li>
                <li><a href='/'><img src={require("../../assets/images/icons/linkedin.svg").default} alt="linkedin" /></a></li>
                <li><a href='/'><img src={require("../../assets/images/icons/medium.svg").default} alt="medium" /></a></li>
              </ul>
            </div>
          </div>
          </div>
          <div className='col-md-12 col-lg-4 footer-contact'>
            <h3>Contact Us</h3>
            <p><a href='tel:+91-8976812213'>+91-8976812213</a></p>
            <p><a href='mailto:counsellor@tadcourses.com'>counsellor@tadcourses.com</a></p>
          </div>
          <div className='col-md-12 col-lg-8 footer-social d-block d-lg-none'>
            <h3>Follow us</h3>
            <ul>
              <li><a href='/'><img src={require("../../assets/images/icons/facebook.svg").default} alt="facebook" /></a></li>
              <li><a href='/'><img src={require("../../assets/images/icons/twitter.svg").default} alt="twitter" /></a></li>
              <li><a href='/'><img src={require("../../assets/images/icons/youtube.svg").default} alt="youtube" /></a></li>
              <li><a href='/'><img src={require("../../assets/images/icons/linkedin.svg").default} alt="linkedin" /></a></li>
              <li><a href='/'><img src={require("../../assets/images/icons/medium.svg").default} alt="medium" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFooter