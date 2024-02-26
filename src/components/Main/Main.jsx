import React from 'react';
import './main.css';
import PageTitle from '../PageTitle/PageTitle';
import Dashboard from '../Dashboard/Dashboard';

const Main = () => {
  return (
    <main id='main' className='name'>
        <PageTitle page="Dashboard"/>
        <Dashboard />
    </main>
  )
}

export default Main