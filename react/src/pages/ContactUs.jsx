import React, { useEffect } from 'react'
import LandingLayout from '../layouts/LandingLayout'
import CommonBanner from "../components/Common/CommonBanner";
import ContactMain from '../components/ContactUs/ContactMain';
import Skillset from '../components/Home/Skillset';

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <LandingLayout page={'contact-us'}>
            <CommonBanner
                page="contact"
                title="Contact Us"
                desc="Let our expert resolve all your queries and help you choose the right career option!"
            />
            <ContactMain />
            {/* <Skillset title={"Enhance your skillset"} subtitle={"Embrace new opportunities for growth and success"} /> */}
        </LandingLayout>
    )
}

export default ContactUs