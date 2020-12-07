import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faServer, faCommentDots, faBug, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const VisualData = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    {/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
                        <div className="">
                            <b>Top Errors</b>
                        </div>
                        <div className="data d-flex align-items-center">
                            <small style={{color: "rgb(102, 184, 223)"}}>MORE ></small>
                        </div>
                    </div>
                   

                    <div className="visual p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Premium Less than zero</b> <span className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "red"}}>1500</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Sum insured Less than zero</b> <span className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "red"}}>1500</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Incorrect city names &amp; address</b> <span style={{backgroundColor:"rgb(124, 168, 3)"}} className="status">Medium</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "rgb(124, 168, 3)"}}>1500</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Discharge date before admission date</b> <span className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "red"}}>1500</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Wrong telephone numbers</b> <span style={{backgroundColor:"orange"}} className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "orange"}}>1500</span>
                        </div>
                    </div>
                    </div></div>

                        {/* Data 2 */}

                <div className="col-lg-6">
                    {/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
                        <div className="">
                            <b>Assigned to Me</b>
                        </div>
                        <div className="data d-flex align-items-center">
                            <small style={{color: "rgb(102, 184, 223)"}}>MORE ></small>
                        </div>
                    </div><div className="visual p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Premium Less than zero</b> <span className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Sum insured Less than zero</b> <span className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Incorrect city names &amp; address</b> <span style={{backgroundColor:"rgb(124, 168, 3)"}} className="status">Medium</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Discharge date before admission date</b> <span className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Wrong telephone numbers</b> <span style={{backgroundColor:"orange"}} className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                    </div>
                    </div></div>

                    {/* Data 3 */}

                    <div className="col-lg-6">
                    {/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
                        <div className="">
                            <b>Highest Business Impact</b>
                        </div>
                        <div className="data d-flex align-items-center">
                            <small style={{color: "rgb(102, 184, 223)"}}>MORE ></small>
                        </div>
                    </div><div className="visual p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Premium Less than zero</b> <span className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "red"}}>$1500.00</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Sum insured Less than zero</b> <span className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "red"}}>$1500.00</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Incorrect city names &amp; address</b> <span style={{backgroundColor:"rgb(124, 168, 3)"}} className="status">Medium</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "rgb(124, 168, 3)"}}>$1500.00</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Discharge date before admission date</b> <span className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "red"}}>$1500.00</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="dataHead">
                            <b>Wrong telephone numbers</b> <span style={{backgroundColor:"orange"}} className="status">HIGH</span> <br/>
                            <small>MARKETING WORK FLOW 1</small>
                        </div>
                        <div className="data d-flex align-items-center">
                            <span style={{color: "orange"}}>$1500.00</span>
                        </div>
                    </div>
                    </div></div>

                    {/* Data 4 */}

                    <div className="col-lg-6">
                    {/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
                        <div className="">
                            <b>Activity Stream</b>
                        </div>
                        <div className="data d-flex align-items-center">
                            <small style={{color: "rgb(102, 184, 223)"}}>MORE ></small>
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