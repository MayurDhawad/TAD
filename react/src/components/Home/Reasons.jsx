import React, { useState } from 'react'
import Slider from 'react-slick';
const Reasons = () => {
    const [TadReasons] = useState([
        {
            id: 1,
            title: "International Course Mentors",
            description: "Experience world-class mentorship with our international course mentors providing exceptional knowledge.",
            img: "international-mentors.jpg",
            icon: "international-mentors-icon.svg"
        },
        {
            id: 2,
            title: "Multilingual learning approach",
            description: "Expand your skills in your preferred language with our inclusive learning approach.",
            img: "multilangual-learning-approach.jpg",
            icon: "multilangual-learning-approach.svg"
        },
        {
            id: 3,
            title: "Industry-centric Online Training Courses",
            description: "We offer training courses that aligns with the industry demands making you job ready.",
            img: "industry-centric-courses.jpg",
            icon: "industry-centric-courses.svg"
        },
        {
            id: 4,
            title: "100% Job Assistance",
            description: "Our online course with placement assistance offers personalized support and guidance to help you find the right career.",
            img: "job-assistance.jpg",
            icon: "job-assistance.svg"
        }
    ]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        customPaging: (i) => {
            return (
                <div className="reasons-custom-dot">
                    <div className='reasonsimg'>
                        <img src={require("../../assets/images/home/reasons/" + TadReasons[i].icon)} alt={TadReasons[i].icon} />
                    </div>
                    <div className='reasonscont'>
                        <h4>{TadReasons[i].title}</h4>
                        <p>{TadReasons[i].description}</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className='container cusReasonsSec'>
            <div className="row">
                <div className="col-12 text-center"><h2>Reasons to choose TAD Online Certification</h2></div>
                <div className='col-12'>
                    <div className='cussetimg'>
                        <Slider {...settings}>
                            {TadReasons.map((tadreason, index) => (<img key={index} src={require("../../assets/images/home/reasons/" + tadreason.img)} alt={TadReasons.img} />))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reasons