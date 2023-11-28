import React, { useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap'
import blogData from '../../blogData'
import BlogCard from './BlogCard'

const BlogList = () => {

    const [blogFilter, setBlogFilter] = useState("All");
    const [filteredList, setFilteredList] = useState([]);
    const [viewAll, setViewAll] = useState(false);

    const filterBlogs = () => {
        if (blogFilter === "All") {
            setFilteredList(blogData);
        }
        else {
            let applyFilter = blogData.filter((blog) => {
                if (blog.category === blogFilter) {
                    return blog;
                }
            })
            setFilteredList(applyFilter);
        }
    }

    useEffect(() => {
        filterBlogs();
    }, [blogFilter])


    return (
        <div className='blog-list-main'>
            <Container>
                {/* <div className='blog-tab'>
                    <button className={'blog-tab-btn ' + (blogFilter === "All" ? "active" : "")}
                        onClick={() => setBlogFilter('All')}>
                        All</button>
                    <button className={'blog-tab-btn ' + (blogFilter === "UI/UX Design" ? "active" : "")}
                        onClick={() => setBlogFilter('UI/UX Design')}>
                        UI/UX</button>
                    <button className={'blog-tab-btn ' + (blogFilter === "HTML/CSS/JS" ? "active" : "")}
                        onClick={() => setBlogFilter('HTML/CSS/JS')}>
                        HTML/CSS/JS</button>
                    <button className={'blog-tab-btn ' + (blogFilter === "Angular" ? "active" : "")}
                        onClick={() => setBlogFilter('Angular')}>
                        Angular</button>
                    <button className={'blog-tab-btn ' + (blogFilter === "NodeJS" ? "active" : "")}
                        onClick={() => setBlogFilter('NodeJS')}>
                        NodeJS</button>
                </div> */}

                <Row className='blog-list'>
                    {
                        viewAll ? (
                            <>
                                {
                                    filteredList && filteredList.map((blog) => (
                                        <BlogCard blog={blog} key={blog.url} />
                                    ))
                                }
                            </>
                        ) : (
                            <>
                                {
                                    filteredList && filteredList.slice(0,6).map((blog) => (
                                        <BlogCard blog={blog} key={blog.url} />
                                    ))
                                }
                            </>
                        )
                    }
                </Row>
                <div className='view-more-wrapper'>
                    <button className='view-more-btn' onClick={() => setViewAll(!viewAll)}>
                        {viewAll ? "View Less" : "View All"}
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default BlogList