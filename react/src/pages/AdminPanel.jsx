import React, { useEffect, useState } from 'react'
import AdminNav from '../components/AdminPanel/AdminNav'
import LoginForm from '../components/AdminPanel/LoginForm'
import UserList from '../components/AdminPanel/UserList'

const AdminPanel = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminUsers] = useState([
    { email: "karand@techved.com", password: "karand@123" },
    { email: "hiteshm@techved.com", password: "hiteshm@123" },
    { email: "umangp@techved.com", password: "umangp@123" },
    { email: "saishad@techved.com", password: "saishad@123" },
    { email: "dipeshg@techved.com", password: "dipeshg@123" },
  ])

  useEffect(() => {
    
    let isAlreadyLogged = sessionStorage.getItem('loggedIn');
    if(isAlreadyLogged){
      handleSubmit(JSON.parse(isAlreadyLogged));
    }
  }, [isLoggedIn])
  

  const handleSubmit = (user) => {
    let logStatus = adminUsers.map((adminUser) => {
      if (adminUser.email === user.email && adminUser.password === user.password) {
        sessionStorage.setItem('loggedIn', JSON.stringify(user));
        return true;
      }
      return false;
    })
    setIsLoggedIn(logStatus.includes(true));
  }

  const adminLogout =()=>{
    sessionStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  }

  return (
    <div>
      <AdminNav adminLogout={adminLogout} isLoggedIn={isLoggedIn} />
      {
        isLoggedIn ? (<UserList />) : (<LoginForm handleSubmit={handleSubmit} />)
      }
    </div>
  )
}

export default AdminPanel