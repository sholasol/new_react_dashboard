import React from 'react'
import Logo from '../Logo/Logo'
import './header.css';
import SearchBar from '../SearchBar/SearchBar';
import Nav from '../Nav/Nav';



const Header = () => {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  )
}

export default Header