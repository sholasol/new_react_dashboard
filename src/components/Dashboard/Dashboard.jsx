import React from 'react'
import Stat from '../Stat/Stat';
import './dashboard.css';
import Report from '../Report/Report';
import RecentSales from '../Sales/RecentSales';
import TopSelling from '../TopSelling/TopSelling';
import RecentActivity from '../RecentActivity/RecentActivity';
import BudgetReport from '../Budget/BudgetReport';
import WebTraffic from '../WebTraffic/WebTraffic';
import News from '../News/News';


const Dashboard = () => {

  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    <Stat />
                    <div className="col-md-12">
                        <Report />
                    </div>
                    <div className="col-md-12">
                        <RecentSales />
                    </div>
                    <div className="col-md-12">
                        <TopSelling />
                    </div>
                </div>
            </div>
            <div className="col-lg-4"> 
                <RecentActivity />
                <BudgetReport />
                <WebTraffic />
                <News />
            </div>
        </div>
    </section>
  )
}

export default Dashboard