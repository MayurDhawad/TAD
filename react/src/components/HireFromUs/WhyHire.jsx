import React, { useState } from 'react'
import Slider from 'react-slick';

const WhyHire = () => {
  const [TadReasons] = useState([
    {
        id:1,
        title:"Industry - Ready Professionals",
        description: '"Hire ready-to-go pros for exceptional results"',
        img: "industry-ready-professionals.jpg",
        icon: "industry-ready-professionals.svg"
    },
    {
        id:2,
        title:"Zero Training Cost",
        description: '"Save big with certified pros trained by the best"',
        img: "zero-training-cost.jpg",
        icon: "zero-training-cost.png"
    },
    {
        id:3,
        title:"Accelerate your projects",
        description: '"Get certified pros to hit the ground running"',
        img: "accelerate-your-projects.jpg",
        icon: "accelerate-your-projects.png"
    },
    {
        id:4,
        title:"Expertise you can trust",
        description: '"Partner with certified pros trained by industry leaders"',
        img: "expertise-you-can-trust.jpg",
        icon: "expertise-you-can-trust.png"
    }
]);

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: (i) => {
        return (
          <div className="reasons-custom-dot">
            <div className='reasonsimg'>
                <img src={require("../../assets/images/hire/why-hire/" + TadReasons[i].icon)} alt={TadReasons[i].icon} />
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
        <div className="col-12 text-center"><h2>Why hire TAD-certified professionals</h2></div>
        <div className='col-12'>
          <div className='cussetimg'>
              <Slider {...settings}>
                  {TadReasons.map((tadreason, index) => (<img key={index} src={require("../../assets/images/hire/why-hire/" + tadreason.img)} alt={TadReasons.img} />))}
              </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyHire
