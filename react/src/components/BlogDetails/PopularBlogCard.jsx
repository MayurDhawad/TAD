import React, { useState } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const PopularBlogCard = (props) => {

  const { blog } = props;

  return (
    <div className='pop-blog-card-wrapper'>
      <Link className='read-more' to={"/blog/" + blog.url}>
        <Card className='pop-blog-card'>
          <Row>
            <Col xs={5}>
              <img className='card-img' src={require('../../assets/images/blog/blog-list/' + blog.thumbnail)} alt={blog.title} />
            </Col>
            <Col xs={7} className="py-3 ps-1 pe-4">
              <p className='title'>{blog.title.length > 44 ?  blog.title.slice(0,44) : blog.title}...</p>
              <p className='desc'>{blog.desc.length > 54 ?  blog.desc.slice(0,54) : blog.desc}...</p>
              <p className='author'>{blog.author}</p>
              <p className='date-time'>{blog.date} - <span>{blog.readTime}</span></p>
            </Col>
          </Row>
        </Card>
      </Link>
    </div>
  )
}

export default PopularBlogCard