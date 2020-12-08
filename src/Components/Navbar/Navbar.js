import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import { faBug, faChartLine, faCodeBranch, faServer} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="container mainNav">
          <div style={{overflowX:"auto"}}>
                                <table class="parent">
                                    <tr>
                                    <td class="avatar"><a className="logo" href="#"><img src="https://png.pngtree.com/templates/sm/20180616/sm_5b2470f712e9a.jpg" alt=""/></a></td>
                                        <td class="avatar"><a className="nav-link mr-2" href="#c"><FontAwesomeIcon className="icon" icon={faServer} />Data Library</a></td>
                                        <td class="avatar"><a className="nav-link mr-2" href="#c"><FontAwesomeIcon className="icon" icon={faCodeBranch} />Workflows</a></td>
                                        <td class="avatar"><a className="nav-link mr-2" href="#b"><FontAwesomeIcon className="icon" icon={faPlayCircle} />Scheduler</a></td>
                                        <td class="avatar"><a className="nav-link mr-2" href="#c"><FontAwesomeIcon className="icon" icon={faBug} />Error Manager</a></td>
                                        <td class="avatar"><a className="nav-link mr-2" href="#c"><FontAwesomeIcon className="icon" icon={faCommentDots} />Notifications</a></td>
                                        <td class="avatar"><a className="nav-link" href="#c"><FontAwesomeIcon className="icon" icon={faChartLine} />Reports</a></td>
                                    </tr>
                                </table>
                            </div>
        </div>
    );
};

export default Navbar;