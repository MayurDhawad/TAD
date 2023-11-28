import React from 'react'
import LandingLayout from '../layouts/LandingLayout'
import CommonBanner from "../components/Common/CommonBanner"
import OurVision from '../components/AboutUs/OurVision'
import OurMission from '../components/AboutUs/OurMission'
import OurValues from "../components/AboutUs/OurValues";
import KeepGrowing from '../components/AboutUs/KeepGrowing'
import Leadership from '../components/AboutUs/Leadership'
import Gallery from '../components/AboutUs/Gallery'
import ContactPanel from '../components/AboutUs/ContactPanel'

const AboutUs = () => {
    return (
        <LandingLayout page={'about-us'}>
            <CommonBanner
                page="about"
                title="About Us"
                desc="We deliver comprehensive learning experience to the enthusiastic learners in the field of digital technology through our interactive live online sessions."
            />
            <OurVision />
            <OurValues />
            <OurMission />
            <Leadership />
            <KeepGrowing />
            <Gallery />
            <ContactPanel/>
        </LandingLayout>
    )
}

export default AboutUs