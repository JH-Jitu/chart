import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const StatsBar = () => {
    return (
        <div class="statsBar">
          <div style={{overflowX:"auto"}}>
                                <div className="d-flex justify-content-between">
                                <table class="parent">
                                    <tr>
                                    <td class="avatar"><b>Data Statistics</b></td>
                                       
                                    </tr>
                                </table>
                                <table class="parent">
                                    <tr>
                                        <td class="avatar"><a style={{color: 'rgb(57, 113, 216)'}} className="nav-link" href="#c"><FontAwesomeIcon className="icon mr-1" icon={faCircle} />Incoming Data</a></td>
                                        <td class="avatar"><a style={{color: 'rgb(101, 166, 240)'}} className="nav-link" href="#c"><FontAwesomeIcon className="icon mr-1" icon={faCircle} />No of Error detected</a></td>
                                        <td class="avatar"><a style={{color: 'grey'}} className="nav-link" href="#b"><FontAwesomeIcon className="icon mr-1" icon={faCircle} />No of error fixed number</a></td>
                                        <td class="avatar"><a style={{color: 'grey'}} className="nav-link" href="#c"><FontAwesomeIcon className="icon mr-1" icon={faCircle} />Number of error unassigned</a></td>
                                        <td class="avatar"><a style={{color: 'grey'}} className="nav-link" href="#c"><FontAwesomeIcon className="icon mr-1" icon={faCircle} />Number of error unassigned</a></td>
                                        <td class="avatar"><a style={{color: 'grey'}} className="nav-link" href="#c"><FontAwesomeIcon className="icon mr-1" icon={faCircle} />Menu▽</a></td>
                                    </tr>
                                </table>
                                </div>
                            </div>
        </div>
    );
};

export default StatsBar;