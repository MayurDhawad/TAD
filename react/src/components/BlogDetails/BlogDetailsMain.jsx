import React, { useState } from 'react';
import { Markup } from 'interweave';

const BlogDetailsMain = (props) => {

    const [openShare, setOpenShare] = useState(false);
    const toggleShare = () => setOpenShare(!openShare);
    const { blog } = props;
    return (
        <div className='blog-details-main'>
            {
                blog ? (
                    <>
                        <p className='breadcrumb'>{"Blogs > "} <span>{blog.category}</span></p>
                        <h1 className='blog-title'>{blog.title}</h1>
                        <p className='blog-author'>{blog.author}</p>
                        <div className='share-wrapper'>
                            <p className='blog-date'>{blog.date} - <span>{blog.readTime}</span></p>
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
                        <img className='blog-img' src={require('../../assets/images/blog/blog-list/' + blog.banner)} alt={blog.title} />

                        <div className='blog-content'>
                            <Markup containerTagName="div" content={blog.content} />
                        </div>

                    </>
                ) : null
            }
        </div>
    )
}

export default BlogDetailsMain