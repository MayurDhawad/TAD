import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row, UncontrolledDropdown } from 'reactstrap'

const MainNavbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDrop = () => setDropdownOpen(!dropdownOpen);

  const [menudropdownOpen, setMenuDropdownOpen] = useState(false);
  const toggleMenuDrop = () => setMenuDropdownOpen(!menudropdownOpen);

  return (
    <header>
      <div className='container-fluid top-header-main'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className='top-header'>
                <li>
                  <a href='mailto:counsellor@tadcourses.com'>
                    <img src={require("../../assets/images/icons/email-white.svg").default} alt="Email" />
                    counsellor@tadcourses.com
                  </a>
                </li>
                <li>
                  <a href='tel:+91 8976812213'>
                    <img src={require("../../assets/images/icons/phone-white.svg").default} alt="Phone" />
                    +91 8976812213
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar className='header-main' expand="lg" container="lg">
        <Link className="navbar-brand" to="/">
          <img src={require("../../assets/images/logo.png")} alt="TAD Logo" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {
            props.examNav ? (
              <Nav className="header-main-nav ms-auto" navbar>
                <NavItem className="course-dropdown active">
                  <Dropdown inNavbar isOpen={menudropdownOpen} toggle={() => { toggleMenuDrop() }}>
                    <Link className="nav-link" onClick={toggleMenuDrop}>
                      Hi, Ankita
                      <img src={require("../../assets/images/icons/menu-dropdown-arrow.svg").default} className="inactive" alt="More Services" />
                      <img src={require("../../assets/images/icons/menu-dropdown-arrow-active.svg").default} className="active" alt="More Services" />
                    </Link>
                    <DropdownMenu className='position-absolute w-100 navDropMenu rounded-bottom'>
                      <NavItem>
                        <NavLink onClick={toggleMenuDrop} className='nav-link'>Hi, Ankita</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink onClick={toggleMenuDrop} className='nav-link'>Log out</NavLink>
                      </NavItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </Nav>
            ) : (
              <Nav className="header-main-nav mx-auto" navbar>
                <NavItem className={props.page === "home" ? 'active' : ""}>
                  <Link className='nav-link' to="/">Home</Link>
                </NavItem>
                <NavItem className={"course-dropdown " + (props.page === "course-details" ? 'active' : "")}>
                  <Dropdown inNavbar isOpen={menudropdownOpen} toggle={() => { toggleMenuDrop() }}>
                    <Link className="nav-link" onClick={toggleMenuDrop}>
                      Certified Courses
                      <img src={require("../../assets/images/icons/menu-dropdown-arrow.svg").default} className="inactive" alt="More Services" />
                      <img src={require("../../assets/images/icons/menu-dropdown-arrow-active.svg").default} className="active" alt="More Services" />
                    </Link>
                    <DropdownMenu className='position-absolute navDropMenu'>
                      <NavItem className={props.course === "ux-ui-design-certification" ? 'active' : ""}>
                        <Link onClick={toggleMenuDrop} className='nav-link' to="/course/ux-ui-design-certification">UX/UI Design Certification</Link>
                      </NavItem>
                      <NavItem className={props.course === "web-development-program" ? 'active' : ""}>
                        <Link onClick={toggleMenuDrop} className='nav-link' to="/course/web-development-program">Web Development Program</Link>
                      </NavItem>
                      <NavItem className={props.course === "nodejs-reactjs" ? 'active' : ""}>
                        <Link onClick={toggleMenuDrop} className='nav-link' to="/course/nodejs-reactjs">NodeJS & ReactJS</Link>
                      </NavItem>
                      <NavItem className={props.course === "nodejs-angular" ? 'active' : ""}>
                        <Link onClick={toggleMenuDrop} className='nav-link' to="/course/nodejs-angular">NodeJS & Angular</Link>
                      </NavItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem className={props.page === "hire-from-us" ? 'active' : ""}>
                  <Link className='nav-link' to="/hire-from-us">Hire From Us</Link>
                </NavItem>
                <NavItem className={props.page === "blog" ? 'active' : ""}>
                  <Link className='nav-link' to="/blog">Blogs</Link>
                </NavItem>
                <NavItem className={props.page === "about-us" ? 'active' : ""}>
                  <Link className='nav-link' to="/about-us">About Us</Link>
                </NavItem>
                <NavItem className={props.page === "contact-us" ? 'active' : ""}>
                  <Link className='nav-link' to="/contact-us">Contact Us</Link>
                </NavItem>
              </Nav>
            )
          }
        </Collapse>
        {/* <Nav className='header-more-nav'>
          <Dropdown inNavbar isOpen={dropdownOpen} toggle={() => { toggleDrop() }}>
            <DropdownToggle nav onClick={toggleDrop}>
              <img src={require("../../assets/images/icons/menu-more.svg").default} alt="More Services" />
            </DropdownToggle>
            <DropdownMenu end className='position-absolute end-0 navDropMenu'>
              <Row>
                <Col xs="6">
                  <a href='/' className='navDroplink'>
                    <img src={require('../../assets/images/nav/techved-tv-logo.svg').default} alt="tv" />
                    Techved TV
                  </a>
                </Col>
                <Col xs="6">
                  <a href='/' className='navDroplink'>
                    <img src={require('../../assets/images/nav/bhaasha-logo.svg').default} alt="tv" />
                    Bhasha
                  </a>
                </Col>
                <Col xs="6">
                  <a href='/' className='navDroplink'>
                    <img src={require('../../assets/images/nav/techved-tv-logo.svg').default} alt="tv" />
                    Techved TV
                  </a>
                </Col>
                <Col xs="6">
                  <a href='/' className='navDroplink'>
                    <img src={require('../../assets/images/nav/techved-tv-logo.svg').default} alt="tv" />
                    Techved TV
                  </a>
                </Col>
                <Col xs="6">
                  <a href='/' className='navDroplink'>
                    <img src={require('../../assets/images/nav/techved-tv-logo.svg').default} alt="tv" />
                    Techved TV
                  </a>
                </Col>
                <Col xs="6">
                  <a href='/' className='navDroplink'>
                    <img src={require('../../assets/images/nav/techved-tv-logo.svg').default} alt="tv" />
                    Techved TV
                  </a>
                </Col>
              </Row>
            </DropdownMenu>
          </Dropdown>
        </Nav> */}
      </Navbar>
    </header>
  )
}

export default MainNavbar