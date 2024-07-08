import React, { useState } from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [navWidth, setNavWidth] = useState(0);

  const openNav = () => {
    setNavWidth(250);
  };

  const closeNav = () => {
    setNavWidth(0);
  };

  return (
    <div>
      <div id="mySidenav" className="sidenav" style={{ width: navWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="event">Event</Link>
        <Link to="view_event">ViewEvent</Link>
        {/* <Link to="eve">UplodEvent</Link> */}
        <Link to="/">Log out</Link>
      </div>
      <span className="openbtn" onClick={openNav}>
        &#9776;
      </span>
    </div>
  );
};

export default SideNav;
