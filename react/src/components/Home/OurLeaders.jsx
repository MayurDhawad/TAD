import React, { useState } from 'react'
import Slider from 'react-slick';
import OurLeadersCard from './OurLeadersCard'

const OurLeaders = () => {

  const [leaders] = useState([
    {
      img: "swaragini-mohar.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Erat mi odio non id tellus viverra.Lorem ipsum dolor sit amet",
      name: "Swaragini Mohar",
      designation: "Lorem ipsum",
      videoLink: "/"
    },
    {
      img: "swaragini-mohar.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Erat mi odio non id tellus viverra.Lorem ipsum dolor sit amet",
      name: "Swaragini Mohar",
      designation: "Lorem ipsum",
      videoLink: "/"
    },
    {
      img: "swaragini-mohar.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Erat mi odio non id tellus viverra.Lorem ipsum dolor sit amet",
      name: "Swaragini Mohar",
      designation: "Lorem ipsum",
      videoLink: "/"
    },
    {
      img: "swaragini-mohar.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Erat mi odio non id tellus viverra.Lorem ipsum dolor sit amet",
      name: "Swaragini Mohar",
      designation: "Lorem ipsum",
      videoLink: "/"
    },
    {
      img: "swaragini-mohar.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Erat mi odio non id tellus viverra.Lorem ipsum dolor sit amet",
      name: "Swaragini Mohar",
      designation: "Lorem ipsum",
      videoLink: "/"
    },
    {
      img: "swaragini-mohar.jpg",
      description: "Lorem ipsum dolor sit amet consectetur. Erat mi odio non id tellus viverra.Lorem ipsum dolor sit amet",
      name: "Swaragini Mohar",
      designation: "Lorem ipsum",
      videoLink: "/"
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoPlay: true
  };

  return (
    <div className='our-leaders-main'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 our-leaders-header'>
            <h2>From our learners</h2>
            <p>Unlock your career potential with industry expert and get exclusive insight tailored </p>
          </div>
          <div className='col-12'>
            <div className='row align-items-center'>
              <div className='col-12 col-md-3'>
                <div className='our-leaders-left'>
                  <h3>Great career opportunities await with TAD Connect with us NOW!</h3>
                  <a href='/'>Connect Now <span><img src={require("../../assets/images/icons/connect-now-arrow.svg").default} alt="Connect Now" /></span></a>
                </div>
              </div>
              <div className='col-12 col-md-9'>
                <Slider {...settings}>
                  {
                    leaders.map((leader, index) => (<OurLeadersCard leader={leader} key={index} />))
                  }
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurLeaders
