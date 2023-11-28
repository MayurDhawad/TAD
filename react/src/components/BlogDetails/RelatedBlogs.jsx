import React, { useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap'
import blogData from '../../blogData'
import BlogCard from "../BlogListing/BlogCard";

const RelatedBlogs = (props) => {

    const [filteredList, setFilteredList] = useState([]);

    const filterBlogs = () => {

        let applyFilter;
        
        if(props.blog){
            applyFilter = blogData.filter((blog) => {
                if (blog !== props.blog) {
                    return blog;
                }
            })
        }
        else{
            applyFilter = blogData;
        }
        
        setFilteredList(applyFilter);
    }

    useEffect(() => {
        filterBlogs();
    }, [props.blog])

    return (
        <div className='related-blogs-main'>
            <Container>
                <p className='related-title'>Related Blogs</p>
                <Row>
                    {
                        filteredList && filteredList.slice(0, 3).map((blog) => (
                            <BlogCard blog={blog} key={blog.url} />
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default RelatedBlogs