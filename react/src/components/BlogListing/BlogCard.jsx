import React, { useState } from 'react';
import { Card, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {

  const { blog } = props;

  const [openShare, setOpenShare] = useState(false);
  const toggleShare = () => setOpenShare(!openShare);

  return (
    <Col xl="4" md="6" className='blog-card-wrapper'>
      <Card className='blog-card'>
        <img className='card-img' src={require('../../assets/images/blog/blog-list/' + blog.thumbnail)} alt={blog.title} />

        <div className='card-content-main'>
          <div className='blog-top-main'>
            <div className='share-wrapper'>
              <p className='category'>{blog.category}</p>
              {/* <button className={'share-btn ' + (openShare ? 'active' : '')} onClick={toggleShare}>
                <img src={require('../../assets/images/blog/share-icon.svg').default} alt="share" />
              </button> */}
              {
                openShare ? (
                  <div className='social-list-wrapper'>
                    <div className='social-list'>
                      <a className='social-icon' onClick={toggleShare} href='/'><img src={require('../../assets/images/blog/whatsapp.svg').default} alt="social" /></a>
                      <a className='social-icon' onClick={toggleShare} href='/'><img src={require('../../assets/images/blog/instagram.svg').default} alt="social" /></a>
                      <a className='social-icon' onClick={toggleShare} href='/'><img src={require('../../assets/images/blog/facebook.svg').default} alt="social" /></a>
                      <a className='social-icon' onClick={toggleShare} href='/'><img src={require('../../assets/images/blog/linkedin.svg').default} alt="social" /></a>
                      <a className='social-icon' onClick={toggleShare} href='/'><img src={require('../../assets/images/blog/twitter.svg').default} alt="social" /></a>
                    </div>
                  </div>
                ) : null
              }
            </div>
            <p className='title'>{blog.title}</p>
            <p className='desc'>{blog.desc}
              <Link className='read-more' to={"/blog/" + blog.url}>Read More</Link>
            </p>
          </div>

          <div className='blog-bottom-main'>
            <p className='author'>{blog.author}</p>
            <p className='date-time'>{blog.date} - <span>{blog.readTime}</span></p>
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default BlogCard