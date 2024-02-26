import React from 'react';
import './sidebar.css';
import navList from '../../data/navItem'

const Sidebar = () => {

    const handleLogout = () => {
        alert('You are logged out.')
    }
  return (
    <aside id="sidebar" class='sidebar'>
    <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
            <a href="/" class="nav-link">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="" class="nav-link collapsed"
             data-bs-toggle="collapse" data-bs-target="#document-nav">
                <i class="bi bi-menu-button-wide"></i>
                <span>Document</span>
                <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="document-nav" class="nav-content collapse">
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Customers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Suppliers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Logistics</span>
                    </a>
                </li>
            </ul>
        </li>

        <li class="nav-item">
            <a href="" class="nav-link collapsed"
             data-bs-toggle="collapse" data-bs-target="#forms-nav">
                <i class="bi bi-journal-text"></i>
                <span>Forms</span>
                <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" class="nav-content collapse">
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Forms</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Application Forms</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Release Forms</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Cancellation Forms</span>
                    </a>
                </li>
            </ul>
        </li>

        <li class="nav-item">
            <a href="" class="nav-link collapsed"
             data-bs-toggle="collapse" data-bs-target="#tables-nav">
                <i class="bi bi-layout-text-window-reverse"></i>
                <span>Tables</span>
                <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" class="nav-content collapse">
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>General Tables</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Data Tables</span>
                    </a>
                </li>
            </ul>
        </li>
   
        <li class="nav-item">
            <a href="" class="nav-link collapsed"
             data-bs-toggle="collapse" data-bs-target="#charts-nav">
                <i class="bi bi-bar-chart"></i>
                <span>Charts</span>
                <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" class="nav-content collapse">
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>ChartJS</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Apex Chart</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>ECharts</span>
                    </a>
                </li>
            </ul>
        </li>
        
        <li class="nav-item">
            <a href="" class="nav-link collapsed"
             data-bs-toggle="collapse" data-bs-target="#icons-nav">
                <i class="bi bi-journal-text"></i>
                <span>Icons</span>
                <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="icons-nav" class="nav-content collapse">
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Bootstrap Icons</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>Remix Icons</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-circle"></i>
                        <span>BoxIcons</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className="nav-heading">Pages</li>
                {
                    navList.map(nav =>(
                       <li className='nav-item' key={nav._id}>
                            {
                                nav.name ==='Logout' ? ( 
                                    <a href="#" className="nav-link collapse" onClick={handleLogout}>
                                        <i className={`${nav.icon} text-danger`}></i>
                                        <span className='text-danger'>{nav.name}</span>
                                    </a>
                                ) : (
                                    <a href="#" className="nav-link collapse">
                                        <i className={nav.icon}></i>
                                        <span>{nav.name}</span>
                                    </a>
                                )
                            }
                       </li> 
                    ))
                }
    </ul>
</aside>

  )
}

export default Sidebar