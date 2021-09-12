import React from 'react'
import Header from '../../components/header/Header'
import ImageSlider from '../../components/imageSlider/ImageSlider'
import './userHome.css'

const UserHome = (props) => {
  return (
    <div className="user-home-container">
      <Header />
      <div className="userHome-background-image"></div>
      <main className="userHome-main-container">
        <ImageSlider />
      </main>
    </div>
  )
}

export default UserHome
