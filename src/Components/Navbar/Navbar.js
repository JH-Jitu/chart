import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faServer, faCommentDots, faBug, faPlayCircle, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar mainNav navbar-expand-lg">
  <div className="container-fluid">
    <a className="text-dark logo navbar-brand" href="#"><img src="https://png.pngtree.com/templates/sm/20180616/sm_5b2470f712e9a.jpg" alt=""/></a>
    <button className="navbar-toggler btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">Menu</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" href="#c"><FontAwesomeIcon className="icon" icon={faServer} />Data Library</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#c"><FontAwesomeIcon className="icon" icon={faCodeBranch} />Workflows</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#b"><FontAwesomeIcon className="icon" icon={faPlayCircle} />Scheduler</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#c"><FontAwesomeIcon className="icon" icon={faBug} />Error Manager</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#c"><FontAwesomeIcon className="icon" icon={faCommentDots} />Notifications</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#c"><FontAwesomeIcon className="icon" icon={faChartLine} />Reports</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;