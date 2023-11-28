import React, { useEffect } from 'react'
import LandingLayout from '../layouts/LandingLayout'
import { useParams } from "react-router-dom";
import courseData from "../courseData";
import Banner from '../components/CourseDetails/Banner';
import Faq from '../components/Home/Faq';
import CourseDetailsMain from '../components/CourseDetails/CourseDetailsMain';
import faqData from "../faqData";
import tocData from "../tocData";

const CourseDetails = () => {

  const { course } = useParams();
  const details = courseData[course];

  useEffect(() => {
    window.scrollTo(0,0);
  }, [course])

  return (
    <LandingLayout page={"course-details"} course={course}>
      <Banner details={details} course={course} />
      <CourseDetailsMain details={details} tocData={tocData[course]} />
      <Faq faqList={faqData[course]} />
    </LandingLayout>
  )
}

export default CourseDetails