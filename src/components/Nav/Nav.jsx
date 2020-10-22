import React from 'react';
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/settings" activeClassName={classes.active}>Settngs</NavLink>
    </div>
  </nav>
}


export default Nav;