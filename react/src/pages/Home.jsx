import React from 'react'
import LandingLayout from '../layouts/LandingLayout'
import Banner from "../components/Home/Banner";
import EmailerLeadgen from '../components/Home/EmailerLeadgen';
import Skillset from '../components/Home/Skillset';
import Future from '../components/Home/Future'
import PreferredLanguage from '../components/Home/PreferredLanguage'
import Reasons from '../components/Home/Reasons'
import SkillMastery from '../components/Home/SkillMastery';
import Mentors from "../components/Home/Mentors";
import Faq from '../components/Home/Faq';
import OurLeaders from '../components/Home/OurLeaders';

import faqData from "../faqData";

const Home = () => {
  return (
    <LandingLayout page="home">
      <Banner />
      <Skillset title={"Enhance Your Skillset With Best Online Certification Courses"}
        subtitle={"Embrace new opportunities for growth and success with our online programs."} />
      <SkillMastery />
      <Mentors />
      <Future />
      <PreferredLanguage />
      <Reasons />
      <EmailerLeadgen />
      <Faq faqList={faqData["home"]} />
    </LandingLayout>
  )
}

export default Home