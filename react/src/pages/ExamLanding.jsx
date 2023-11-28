import React, { useState } from 'react'
import DetailsNewsletter from '../components/BlogDetails/DetailsNewsletter'
import RelatedBlogs from '../components/BlogDetails/RelatedBlogs'
import AboutTadexam from '../components/ExamLanding/AboutTadexam'
import ExamBanner from '../components/ExamLanding/ExamBanner'
import ProsTAD from '../components/ExamLanding/ProsTAD'
import HowHire from '../components/HireFromUs/HowHire'
import Skillset from '../components/Home/Skillset'
import LandingLayout from '../layouts/LandingLayout'

const ExamLanding = () => {

    const [skills] = useState([
        {
            index: "01",
            description: "Register & make the payment"
        },
        {
            index: "02",
            description: "Receive payment confirmation"
        },
        {
            index: "03",
            description: "Get login credentials and begin your test"
        },
      ]);

    return (
    <LandingLayout>
        <ExamBanner/>
        <AboutTadexam/>
        <HowHire skills={skills} title={'Apply for the test in just 3 simple steps'} exam />
        <ProsTAD/>
        <Skillset title={"Know More About Our Courses"}/>
        <RelatedBlogs/>
        <DetailsNewsletter/>
    </LandingLayout>
  )
}

export default ExamLanding