import React from 'react';
import './sidebar.css';
import navList from '../../data/navItem'

const Sidebar = () => {

    const handleLogout = () => {
        alert('You are logged out.')
    }
  return (
    <aside id="sidebar" className='sidebar'>
            <ul className="sidebar-nav" id="sidebar-nav">
                {navList.map(nav => (
                    <li className="nav-item" key={nav._id}>
                        {/* If the item is not Logout and has a subMenu, render a collapsed link with data-bs-target */}
                        {nav.subMenu ? (
                            <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target={`#${nav.name.toLowerCase()}-nav`}>
                                <i className={nav.icon}></i>
                                <span>{nav.name}</span>
                                <i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                        ) : (
                            // If the item is not Logout and does not have a submenu, render a regular link
                            nav.name !== 'Logout' && (
                                <a href="#" className="nav-link">
                                    <i className={nav.icon}></i>
                                    <span>{nav.name}</span>
                                </a>
                            )
                        )}
                        {/* If the item has a subMenu, render the subMenu */}
                        {nav.subMenu && (
                            <ul id={`${nav.name.toLowerCase()}-nav`} className="nav-content collapse">
                                {nav.subMenu.map(sub => (
                                    <li key={sub._id}>
                                        <a href="#">
                                            <i className={sub.icon}></i>
                                            <span>{sub.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
                {/* Logout button */}
                <li className="nav-item" onClick={handleLogout}>
                    <a href="#" className="nav-link text-danger">
                        <i className="bi bi-box-arrow-in-right text-danger"></i>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </aside>

  )
}

export default Sidebar