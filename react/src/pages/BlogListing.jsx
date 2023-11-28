import React from 'react'
import LandingLayout from "../layouts/LandingLayout";
import CommonBanner from "../components/Common/CommonBanner";
import NewsletterForm from '../components/BlogListing/NewsletterForm';
import BlogList from '../components/BlogListing/BlogList';

const BlogListing = () => {
    return (
        <LandingLayout page={"blog"}>
            <CommonBanner page={"blog"}
                title="Unlock New Knowledge"
                desc="Explore our blogs for new technology trends, updates, and career insights">
                <NewsletterForm />
            </CommonBanner>
            <BlogList/>
        </LandingLayout>
    )
}

export default BlogListing