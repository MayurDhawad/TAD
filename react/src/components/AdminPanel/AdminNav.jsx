import React from 'react'
import { Container } from 'reactstrap'

const AdminNav = (props) => {
    return (
        <div className='bg-red py-2 sticky-top'>
            <Container>
                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <p className='text-light h3 m-0 d-flex align-items-center'>TAD <span className='h6 my-0 ms-md-3 ms-2'>Admin Panel</span></p>
                    {
                        props.isLoggedIn ? (
                            <button className='common-btn px-3 py-1' onClick={props.adminLogout}>Logout</button>
                        ) : null
                    }
                </div>
            </Container>
        </div>
    )
}

export default AdminNav