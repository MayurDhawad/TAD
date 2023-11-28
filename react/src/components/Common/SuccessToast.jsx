import React from 'react'

const SuccessToast = () => {
  return (
    <div className='success-toast'>
      <img src={require('../../assets/images/icons/toast-icon.svg').default} alt="success" /> Request Submitted Successfully
    </div>
  )
}

export default SuccessToast