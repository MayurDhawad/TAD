import React, { useState } from 'react'
import BannerLeadgen from './BannerLeadgen'
import Slider from "react-slick";
import { Button, Container } from 'reactstrap';
import EnrollNowModal from '../Common/EnrollNowModal';

const Banner = () => {

  const [MainBanner] = useState([
    {
      id: '01',
      title: "Lead With the Leaders",
      description: "Our course mentors are the industry leaders bringing the insights of the industry functions and making our learner job ready.",
      img: "slide-1.png",
      bullet: "Leading Mentors",
      button: "Learn More"
    },
    {
      id: '02',
      title: "Conquer the Language barrier with Bhasha",
      description: "TAD powered by Bhaasha brings you the advantage of learning in your preferred language to break the barriers of communication.",
      img: "slide-2.png",
      bullet: "Learn In Your Bhaasha",
      button: "Learn More"
    },
    {
      id: '03',
      title: "World-Class Certification",
      description: "Our online certificate courses are recognized by esteemed organizations across the world, empowering the learners to secure their dream jobs.",
      img: "slide-3.png",
      bullet: "World-Class Certification",
      button: "Learn More"
    },
    {
      id: '04',
      title: "Fast track Your Career",
      description: "Our online course with placement assistance offers assured success to the learners.",
      img: "slide-4.png",
      bullet: "Placement Assistance",
      button: "Learn More"
    }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          adaptiveHeight: true
        }
      }
    ],
    customPaging: (i) => {
      return (
        <div className="banner-custom-dot">
          <div className='banner-count'>
            <p>{MainBanner[i].id}</p>
          </div>
          <p>{MainBanner[i].bullet}</p>
        </div>
        // <div className="banner-custom-dot">
        //   <div className='banner-count'>
        //     <p>{MainBanner[i].id}</p>
        //     <svg className="circle-progress">
        //       <circle r="16" cx="18" cy="18.5" fill="transparent" />
        //       <circle r="16" cx="18" cy="18.5" fill="transparent" className='progress' />
        //     </svg>
        //   </div>
        //   <p>{MainBanner[i].bullet}</p>
        // </div>
      );
    }
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Slider {...settings} className="banner-slider">
        {MainBanner.map((MainBanner, index) => (
          // <img key={index} src={require("../../assets/images/home/reasons/" + MainBanner.img)} alt={MainBanner.img} />
          <div key={index}>
            <div className={'banner-wrapper banner' + MainBanner.id}>
              <Container className='banner-content'>
                <div className='banner-info'>
                  <p className='banner-title'>{MainBanner.title}</p>
                  <p className='banner-description'>{MainBanner.description}</p>
                  <div>
                    <button className='common-btn' onClick={toggle}>{MainBanner.button}</button>
                  </div>
                </div>
                <div className='banner-img'>
                  <img src={require("../../assets/images/home/banner/" + MainBanner.img)} className="img-fluid" alt="" />
                </div>
              </Container>
            </div>
          </div>
        ))}
        {/* <div>
        <div className='banner-wrapper banner1'>
          <Container className='banner-content'>
            <p className='banner-title'>Fast-track Your Career</p>
            <p className='banner-description'>Acquire the essential skills to become a game-changer in the industry </p>
            <div>
              <button className='common-btn' onClick={toggle}>Learn More</button>
            </div>
          </Container>
        </div>
      </div> */}

      </Slider>

      <EnrollNowModal modal={modal} toggle={toggle} />

      <BannerLeadgen />
    </div>
  )
}

export default Banner