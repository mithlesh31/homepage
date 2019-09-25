import React, { useEffect } from 'react';

import './Header.css';

const DataCard = ({ data, currentPage, totalPage}) => {
    useEffect(() => {
        
    }, []);
    return (
        <div className="card-wrapper">
            {data ? data.map(val =>
                 <div className="card">
                    <div> <span>Name:</span> <span>{val.name}</span></div>
                    <div> <span>Pantone Value:</span> <span>{val.pantone_value}</span></div>
                    <div> <span>year:</span> <span>{val.year}</span></div>
                </div>
            ) : <div>N/A</div>}
        </div>
    );
};

export default DataCard;