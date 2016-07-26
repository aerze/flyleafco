import React from 'react';
import { Link } from 'react-router';
import './Navbar.css';

const Navbar = React.createClass({
  getInitialState() {
    return {
      menu: 'closed'
    };
  },

  style: {
    open: { left: 150 }
  },

  handleCloseMenu() {
    this.setState({
      menu: 'closed'
    });
  },

  handleOpenMenu() {
    this.setState({
      menu: 'open'
    });
  },

  renderOverLay() {
    const open = (this.state.menu === 'open');
    if (!open) return;

    return (
      <div
        id="navOverlay"
        onClick={this.handleCloseMenu}
        style={{ opacity: (open)? 1: 0 }}
      />
    );
  },

  renderMenu() {
    const links = [{
      to: '/library',
      text: 'My Library'
    },{
      to: '/discover',
      text: 'Discover'
    },{
      to: '/search',
      text: 'Search'
    },{
      to: '/settings',
      text: 'Settings'
    }];
    const handleCloseMenu = this.handleCloseMenu;

    return (
      <div>
        <Link to="/"
          onClick={this.handleCloseMenu}
          className="pure-menu-heading pure-menu-link">Flyleaf.co</Link>
        <ul className="pure-menu-list">
          {links.map( (link, index) => {
            return (
              <li key={index} className="pure-menu-item">
                <Link to={link.to}
                  onClick={this.handleCloseMenu}
                  className="pure-menu-link">
                    {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },

  render() {
    const open = (this.state.menu === 'open');
    return (
      <div>
        <div id="topnav" className="pure-menu  pure-menu-horizontal" onClick={this.handleOpenMenu}>
          <div className="pure-menu-heading pure-menu-link">Flyleaf.co</div>
        </div>
        <div id="menu" style={{ left: (open) ? '150px' : '0px'}}>
          <nav id="nav" className="pure-menu">
            {this.renderMenu()}
          </nav>
        </div>
        {this.renderOverLay()}
      </div>
    );
  }
});

export default Navbar;
