import React, { useEffect, useState } from 'react'
import LandingLayout from "../layouts/LandingLayout";
import { useParams } from 'react-router-dom';
import blogData from '../blogData'
import { Col, Container, Row } from 'reactstrap';
import BlogDetailsMain from '../components/BlogDetails/BlogDetailsMain';
import MostPopular from '../components/BlogDetails/MostPopular';
import Skillset from '../components/Home/Skillset';
import RelatedBlogs from '../components/BlogDetails/RelatedBlogs';
import DetailsNewsletter from '../components/BlogDetails/DetailsNewsletter';

const BlogDetails = () => {

  const params = useParams();

  const [blog, setBlog] = useState();

  useEffect(() => {
    setBlogData();
    window.scrollTo(0,0);
  }, [params.blog])

  const setBlogData = () => {
    let filtered = blogData.filter((blog) => (blog.url === params.blog));
    setBlog(...filtered);
  }

  return (
    <LandingLayout page={"blog"}>
      <Container>
        <Row>
          <Col xl="8"><BlogDetailsMain blog={blog && blog} /></Col>
          <Col xl="4" className='d-xl-block d-none'><MostPopular blog={blog && blog} /></Col>
        </Row>
        <div className='blog-detail-top'></div>
      </Container>
      <RelatedBlogs blog={blog && blog}/>
      <Skillset title={"Know More About Our Courses"}/>
      <DetailsNewsletter/>
    </LandingLayout>

  )
}

export default BlogDetails