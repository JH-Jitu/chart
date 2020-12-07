import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const StatsBar = () => {
    return (
        <div>
            <nav className="w-100 navbar statsBar navbar-expand-lg">
  <div className="container-fluid">
    <div align="left"><a className="text-dark navbar-brand" href="#">Data Statistics</a></div>
    <button className="navbar-toggler btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">Menu</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <a style={{color: 'rgb(57, 113, 216)'}} className="nav-link" href="#c"><FontAwesomeIcon className="icon" icon={faDotCircle} />Incoming Data</a>
        </li>
        <li className="nav-item">
          <a style={{color: 'rgb(101, 166, 240)'}} className="nav-link" href="#c"><FontAwesomeIcon className="icon" icon={faDotCircle} />No of Error detected</a>
        </li>
        <li className="nav-item">
          <a style={{color: 'grey'}} className="nav-link" href="#b"><FontAwesomeIcon className="icon" icon={faDotCircle} />No of error fixed number</a>
        </li>
        <li className="nav-item" >
          <a style={{color: 'grey'}} className="nav-link" href="#c"><FontAwesomeIcon className="icon" icon={faDotCircle} />Number of error unassigned</a>
        </li>
        <li className="nav-link">
          <a style={{color: 'grey'}} className="nav-item" href="#c"><FontAwesomeIcon className="icon" icon={faDotCircle} />Number of error unassigned</a>
        </li>
        <li className="nav-link">
          <a style={{color: 'grey'}} className="nav-item" href="#c"><FontAwesomeIcon className="icon" icon={faDotCircle} />Menu▽</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default StatsBar;