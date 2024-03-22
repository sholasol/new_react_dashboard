import React from 'react'
import './mainPage.css';
import PageTitle from '../PageTitle/PageTitle';
import Dashboard from '../Dashboard/Dashboard';

const MainPage = () => {
  return (
    <main id='main' className='name'>
        <PageTitle page="Dashboard"/>
        <Dashboard />
    </main>
  )
}

export default MainPage   