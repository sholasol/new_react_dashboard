import React from 'react'

const NavNotice = () => {
  return (
    <li className="nav-item dropdown">
        <a href="" className="nav-link nav-icon" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
                You have 4 new notifcations
                <a href="">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View All
                    </span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>30 minutes ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-x-circle text-danger"></i>
                <div>
                    <h4>Lorem Rectum</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>3 hour ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-check-circle text-success"></i>
                <div>
                    <h4>Lorem Dicta.</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>1 hour ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="dropdown-footer">
                <a href="">Show all Notifications</a>
            </li>
        </ul>
    </li>
  )
}

export default NavNotice