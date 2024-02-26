import React from 'react'
import './nav.css'
import NavNotice from './NavNotice';
import NavAvatar from './NavAvatar';
import NavMessage from './NavMessage';

const Nav = () => {
  return (
    <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
            <NavNotice />
            <NavMessage />
            <NavAvatar />
        </ul>
    </nav>
  )
}

export default Nav