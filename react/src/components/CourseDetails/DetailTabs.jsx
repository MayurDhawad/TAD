
import React, { useState } from 'react'
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import ModuleCard from './ModuleCard';

const DetailTabs = (props) => {

    const [activeTab, setActiveTab] = useState("1");

    return (
        <div>
            <Nav className='course-tabs-wrapper'>
                <NavItem>
                    <button
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => setActiveTab("1")}
                    >
                        <img src={require('../../assets/images/icons/overview.svg').default} alt="overview" />
                        Overview
                    </button>
                </NavItem>
                <NavItem>
                    <button
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => setActiveTab("2")}
                    >
                        <img src={require('../../assets/images/icons/curriculum.svg').default} alt="curriculum" />
                        Curriculum
                    </button>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className='course-tabs-content'>
                <TabPane tabId="1">
                    <Row>
                        <Col lg="8">
                            <div className='detail-main'>
                                <p className='detail-head'>COURSE DESCRIPTION</p>
                                <p className='detail-content'>{props.details.details.desc}</p>
                            </div>
                            <div className='detail-main'>
                                <p className='detail-head'>CERTIFICATION</p>
                                <p className='detail-content'>{props.details.details.certification}</p>
                            </div>
                        </Col>
                        <Col lg="4" className='course-feature-main'>
                            <p className='feature-head'>Course Features</p>
                            <ul className='feature-list'>
                                <li className='feature'>
                                    <div className='feature-title'>
                                        <img src={require('../../assets/images/icons/lecture.svg').default} alt="lecture" />Lectures
                                    </div>
                                    <p className='feature-value'>{props.details.features.lectures}</p>
                                </li>
                                <li className='feature'>
                                    <div className='feature-title'>
                                        <img src={require('../../assets/images/icons/quiz.svg').default} alt="quiz" />Quizzes
                                    </div>
                                    <p className='feature-value'>{props.details.features.quizzes}</p>
                                </li>
                                {/* <li className='feature'>
                                    <div className='feature-title'>
                                        <img src={require('../../assets/images/icons/skill.svg').default} alt="skill" />Skill level
                                    </div>
                                    <p className='feature-value'>{props.details.features.skills}</p>
                                </li> */}
                                <li className='feature'>
                                    <div className='feature-title'>
                                        <img src={require('../../assets/images/icons/assesment.svg').default} alt="lecture" />Assessments
                                    </div>
                                    <p className='feature-value'>{props.details.features.assessments}</p>
                                </li>

                            </ul>
                        </Col>
                        <Col lg="12">
                            <div className='detail-main'>
                                <p className='detail-head'>LEARNING OUTCOMES</p>
                                <div className='detail-content'>
                                    <ul className='outcome-list'>
                                        {props.details.details.outcomes.map((outcome, index) => (
                                            <li key={index}>{outcome}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </TabPane>
                <TabPane tabId="2">
                    <div className='detail-main'>
                        <p className='detail-head'>Curriculum</p>
                    </div>
                    <div className='toc-wrapper'>
                        {
                            props.tocData.map((module, index) => (
                                <ModuleCard key={index} module={module} />
                            ))
                        }
                    </div>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default DetailTabs