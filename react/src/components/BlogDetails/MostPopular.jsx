import React, { useEffect, useState } from 'react'
import blogData from '../../blogData'
import PopularBlogCard from './PopularBlogCard';

const MostPopular = (props) => {

  const [filteredList, setFilteredList] = useState([]);

  const filterBlogs = () => {

    let applyFilter = blogData.filter((blog) => {
      if (blog !== props.blog) {
        return blog;
      }
    })
    setFilteredList(applyFilter);
  }

  useEffect(() => {
    filterBlogs();
  }, [props.blog])

  return (
    <div className='popular-blogs-main'>
      <p className='popular-title'>Most Popular</p>
      <div>
        {
          filteredList && filteredList.slice(0,3).map((blog) => (
            <PopularBlogCard blog={blog} key={blog.url} />
          ))
        }
      </div>
    </div >
  )
}

export default MostPopular