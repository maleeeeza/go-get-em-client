import React from 'react';
import {connect} from 'react-redux';

export function TopNav(props) {

  return (
      <header className="usa-header usa-header-basic" role="banner">
          <div className="usa-nav-container">
              <div className="usa-navbar">
                  <div className="usa-logo" id="basic-logo">

                    <em className="usa-logo-text"><a href="/" title="Home" aria-label="Home"> <img className="flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg" alt="United States of America Flag"/>Go Get Em</a></em>
                  </div>
                  <button className="usa-menu-btn">Menu</button>
              </div>

          <nav className="usa-nav">
              <ul className="usa-nav-primary">
                  <li><a className="usa-nav-link" href="#logout"><span>Settings</span></a></li>
                  <li><a className="usa-nav-link" href="#logout"><span>Logout</span></a></li>
              </ul>
          </nav>
        </div>
    </header>
  );
}

export default connect()(TopNav);
