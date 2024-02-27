import React, { useEffect, useState } from 'react'
import './sales.css'
import CardFilter from '../Crad/CardFilter'
import SalesTable from './SalesTable'

const RecentSales = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:4000/recentsales')
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="card recent-sales overflow-auto">
    <CardFilter filterChange={handleFilterChange}/>
        <div className="card-body">
            <h4 className="card-title">Recent Sales <span>| {filter}</span></h4>
            <SalesTable items={items} />
        </div>
    </div>
  )
}

export default RecentSales