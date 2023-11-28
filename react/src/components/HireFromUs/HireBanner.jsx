import React, { useState } from 'react'
import { Container } from 'reactstrap'
import Slider from "react-slick";
import EnrollNowModal from '../Common/EnrollNowModal';
import HireBannerLeadgen from './HireBannerLeadgen';

const HireBanner = () => {
  const [MainBanner] = useState([
    {
        id:'01',
        title:"Hire Top Talent and Boost Your Business",
        description: "Our professionals are ready to join your brand and make an impact",
        img: "slide-1.png",
        bullet: "Hire Top Talent",
        button: "Start Hiring"
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
      );
    }
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Slider {...settings} className="banner-slider hire-banner-slider">
        {MainBanner.map((MainBanner, index) => (
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
                <img src={require("../../assets/images/hire/banner/" + MainBanner.img)} className="img-fluid" alt="" />
              </div>
            </Container>
          </div>
        </div>
        ))}
      </Slider>
      <EnrollNowModal modal={modal} toggle={toggle} />
      <HireBannerLeadgen />
    </div>
  )
}

export default HireBanner
