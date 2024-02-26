import React, { useState } from 'react'
import CardFilter from '../Crad/CardFilter'
import ReportChart from '../ReportChart/ReportChart'

const Report = () => {
    
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter => {
        setFilter(filter);
    }

  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange}/>
        <div className="card-body">
            <h5 className="card-title">
                Reporst <span>/{filter}</span>
            </h5>
            <ReportChart />
        </div>
    </div>
  )
}

export default Report