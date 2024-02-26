import React from 'react'

import profileImg from '../../images/user.jpg';

const NavAvatar = () => {
  return (
    <li className="nav-item dropdown pe-3">
        <a href="" className="nav-link nav-profile align-items-center pe-0" data-bs-toggle="dropdown">
            <img src={profileImg} alt="profile" className="rounded-circle"/>
            <span className="d-none d-md-block dropdown-toggle ps-2">David Tom</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
                <h6>David</h6>
                <span>Web developer</span>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a href="/" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-person"></i>
                    <span>My profile</span>
                </a>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a href="/" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-gear"></i>
                    <span>Account Setings</span>
                </a>
            </li>
            <li>
                <a href="/" className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-box-arrow-right text-danger"></i>
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    </li>
  )
}

export default NavAvatar