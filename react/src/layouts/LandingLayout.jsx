import React from 'react'
import MainFooter from '../components/Common/MainFooter'
import MainNavbar from '../components/Common/MainNavbar'

const LandingLayout = (props) => {
    return (
        <div>
            <MainNavbar page={props.page} course={props.course} />
            {props.children}
            <MainFooter />
        </div>
    )
}

export default LandingLayout