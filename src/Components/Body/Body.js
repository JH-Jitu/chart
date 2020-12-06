import React from 'react';
import Donut from '../Donut/Donut';

const Body = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Donut></Donut>
                
                </div>

                <div className="col-md-9">
                <h1>Others</h1>
                </div>
            </div>
        </div>
    );
};

export default Body;