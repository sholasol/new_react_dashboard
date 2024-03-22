import React from 'react'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import MainPage from './components/MainPage/MainPage';

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <MainPage />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default Home