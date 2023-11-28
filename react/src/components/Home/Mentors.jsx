import React, { useState } from 'react'
import Slider from 'react-slick'
import MentorCard from './MentorCard'

const Mentors = () => {

    const [mentors] = useState([
        {
            name: "Jagdish Renuke",
            desc: "Sr. Product Designer",
            quote: "UI UX Designer with experience in applying innovations and technology to products.",
            img: "jagdish-renuke.jpg"
        },
        {
            name: "Saumitra Vaidya",
            desc: "Principal Designer",
            quote: "Working over a decade as a designer and innovator in various organisation. Creative proficiency in sketching, renderingand",
            img: "soumitra-vaidya.jpg"
        },
        {
            name: "Divyansh Dixit",
            desc: "Sr. Full Stack Engineer",
            quote: "Software Developer with experience  in Front End and back End using PHP, Node Js, HTML 5.",
            img: "divyansh-dixit.jpg"
        },
        {
            name: "Chetan Yadav",
            desc: "Lead Software Engineer",
            quote: "Experienced Software Engineer with a demonstarted history working in computer gaming industry.",
            img: "chetan-yadav.jpg"
        },
    ])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 664,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='container mentors-main'>
            <div className="row">
                <div className="col-12 mentors-head">
                    <h2>Learn from the best in the industry</h2>
                    <p>Join the forces with course mentors who will inspire, challenge, and motivate</p>
                </div>
                <div className="col-12 mentor-card-wrapper">
                    <Slider {...settings} className="mentor-slider">
                        {
                            mentors.map((mentor, index) => (<MentorCard mentor={mentor} key={index} />))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Mentors