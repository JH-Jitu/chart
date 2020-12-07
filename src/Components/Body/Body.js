import React from 'react';
import Donut from '../Donut/Donut';
import DonutNoApi from '../Donut/DonutNoApi';
import VisualData from '../VisualData/VisualData';

const Body = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <DonutNoApi></DonutNoApi>
                    <Donut></Donut>
                
                </div>

                <div className="col-md-9">
                <VisualData></VisualData>
                </div>
            </div>
        </div>
    );
};

export default Body;