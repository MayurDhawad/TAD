import React, { useState } from 'react'
import HireBanner from '../components/HireFromUs/HireBanner'
import HireGetInTouch from '../components/HireFromUs/HireGetInTouch'
import HireSkillBased from '../components/HireFromUs/HireSkillBased'
import HowHire from '../components/HireFromUs/HowHire'
import WhyHire from '../components/HireFromUs/WhyHire'
import Faq from '../components/Home/Faq'
import faqData from '../faqData'
import LandingLayout from '../layouts/LandingLayout'

const HireFromUs = () => {
  
  const [skills] = useState([
    {
        index: "01",
        description: "Share your requirement"
    },
    {
        index: "02",
        description: "Select the candidate"
    },
    {
        index: "03",
        description: "Conduct the Interview"
    },
    {
        index: "04",
        description: "Choose best-fit talent & hire with ease"
    },
  ]);

  return (
    <LandingLayout page={'hire-from-us'}>
      <HireBanner />
      <WhyHire />
      <HowHire skills={skills} title={'How to Hire From Us'} />
      <HireSkillBased />
      <HireGetInTouch />
      <Faq faqList={faqData["home"]} />
    </LandingLayout>
  )
}

export default HireFromUs
