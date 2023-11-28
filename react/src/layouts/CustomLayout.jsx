import React from 'react'
import MainFooter from '../components/Common/MainFooter'
import MainNavbar from '../components/Common/MainNavbar'

const CustomLayout = (props) => {
    return (
        <div>
            <MainNavbar page={props.page} course={props.course} examNav={props.examNav} />
            {props.children}
            {
                props.noFooter ? null : (<MainFooter />)
            }

        </div>
    )
}

export default CustomLayout