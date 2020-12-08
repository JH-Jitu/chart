import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faServer, faCommentDots, faBug, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from 'react';

const VisualData = () => {

    // FakeData
    const fakeData = [
    {
        name: 'Premium Less than zero', flow: 'MARKETING WORK FLOW 1', status: 'HIGH', value: 1500, price: 1500, color: "red"
    },
    {
      name: 'Sum insured Less than zero', flow: 'MARKETING WORK FLOW 1', status: 'HIGH', value: 1500, price: 1500, color: "red"
    },
    {
        name: 'Incorrect city names & address', flow: 'MARKETING WORK FLOW 1', status: 'MEDIUM', value: 1500, price: 1500, color: "rgb(124, 168, 3)"
    },
    {
        name: 'Discharge date before admission date', flow: 'MARKETING WORK FLOW 1', status: 'HIGH', value: 1500, price: 1500, color: "red"
    },
    {
        name: 'Wrong telephone numbers', flow: 'MARKETING WORK FLOW 1', status: 'LOW', value: 1500, price: 1500, color: "orange"
    },
  ];

 const [fake, setFake] = useState([]);
// fakeData.map(d=>setFake(d));
console.log(fakeData);



    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    {/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
                        <div className="">
                            <b>Top Errors</b>
                        </div>
                        <div className="data d-flex align-items-center">
                            <small style={{color: "rgb(57, 113, 216)"}}>MORE ></small>
                        </div>
                    </div>
                   

                    <div className="visual p-3">
                    {
                    fakeData.map(service => <div className="d-flex align-items-center justify-content-between" key={service.idType} service={service}>
                        <div className="dataHead">
                            <b>{service.name}</b> <span style={{backgroundColor: `${service.color}`}} className="status">{service.status}</span> <br/>
                            <small>{service.flow}</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: `${service.color}`}}>{service.value}</span>
                        </div>
                    </div>
                    )
                }

                    </div></div>

                        {/* Data 2 */}

                <div className="col-lg-6">
                    {/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
                        <div className="">
                            <b>Assigned to Me</b>
                        </div>
                        <div className="data d-flex align-items-center">
                            <small style={{color: "rgb(57, 113, 216)"}}>MORE ></small>
                        </div>
                    </div><div className="visual p-3">
                    {
                    fakeData.map(service => <div className="d-flex align-items-center justify-content-between" key={service.idType} service={service}>
                        <div className="dataHead">
                            <b>{service.name}</b> <span style={{backgroundColor: `${service.color}`}} className="status">{service.status}</span> <br/>
                            <small>{service.flow}</small>
                        </div>
                    </div>
                    )
                }
                    </div></div>

                    {/* Data 3 */}

                    <div className="col-lg-6">
                    {/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
                        <div className="">
                            <b>Highest Business Impact</b>
                        </div>
                        <div className="data d-flex align-items-center">
                            <small style={{color: "rgb(57, 113, 216)"}}>MORE ></small>
                        </div>
                    </div><div className="visual p-3">
                    {
                    fakeData.map(service => <div className="d-flex align-items-center justify-content-between" key={service.idType} service={service}>
                        <div className="dataHead">
                            <b>{service.name}</b> <span style={{backgroundColor: `${service.color}`}} className="status">{service.status}</span> <br/>
                            <small>{service.flow}</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: `${service.color}`}}>${service.price.toFixed(2)}</span>
                        </div>
                    </div>
                    )
                }
                    </div></div>

                    {/* Data 4 */}

                    <div className="col-lg-6">
                    {/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
                        <div className="">
                            <b>Activity Stream</b>
                        </div>
                        <div className="data d-flex align-items-center">
                            <small style={{color: "rgb(57, 113, 216)"}}>MORE ></small>
                        </div>
                    </div>

                    <div className="visual p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead d-flex justify-content-start align-items-start">
                            <div><FontAwesomeIcon className="icon" icon={faCodeBranch} /></div>
                            <div>
                            <b>Workflow - Marketing data 1</b> <br/>
                            <small>Finished running and 10,000 errors have been detected</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span style={{color: "grey", fontSize: "11px"}}>Today</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead d-flex justify-content-start align-items-start">
                            <div><FontAwesomeIcon className="icon" icon={faServer} /></div>
                            <div>
                            <b>Data Library - earthquakes.csv added</b> <br/>
                            <small>earthquakes.csv added and data profiling begun</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span style={{color: "grey", fontSize: "11px"}}>Today</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead d-flex justify-content-start align-items-start">
                            <div><FontAwesomeIcon className="icon" icon={faCommentDots} /></div>
                            <div>
                            <b>@deleeps tagged you in a comment</b> <br/>
                            <small>Have a look at this dataset and see if it... more></small>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span style={{color: "grey", fontSize: "11px"}}>Today</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead d-flex justify-content-start align-items-start">
                            <div><FontAwesomeIcon className="icon" icon={faBug} /></div>
                            <div>
                            <b>Error - 10,000 errors detected</b> <br/>
                            <small>New errors detected in Marketing data 1</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span style={{color: "grey", fontSize: "11px"}}>Today</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead d-flex justify-content-start align-items-start">
                            <div><FontAwesomeIcon className="icon" icon={faPlayCircle} /></div>
                            <div>
                            <b>Job - Marketing Data 1 successfully run</b> <br/>
                            <small>Finished running and 10,000 errors have been detected</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span style={{color: "grey", fontSize: "11px"}}>Today</span>
                        </div>
                    </div>
                    </div></div>
            </div>
        </div>
    );
};

export default VisualData;