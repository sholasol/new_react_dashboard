import React, {useState, useEffect} from 'react'
import './dashboard.css';
import Card from '../Crad/Card';
import Report from '../Report/Report';
import RecentSales from '../Sales/RecentSales';
import TopSelling from '../TopSelling/TopSelling';
import RecentActivity from '../RecentActivity/RecentActivity';

const Dashboard = () => {

    const [cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        .catch(e => console.log(e.message));
    };
    useEffect(() => {
        fetchData();
    }, []);

  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    {
                        cards && cards.length > 0 &&
                        cards.map(card => <Card  key={card._id} card={card}/>)
                    }
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
            </div>
        </div>
    </section>
  )
}

export default Dashboard