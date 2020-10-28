import React from 'react';
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
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
    <div className={classes.item}>
      <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
      <div className={classes.friendsItem}><img src="https://lh3.googleusercontent.com/proxy/gsypaQM2t0Q1p8puyvfIW8-NOX_B88V61SK529J0Xw8cCxM9R7e65bRZZ4r9kEdDopHhcSye0nzR8yD1M1aqkyZxzKqo17tEr97rPESEgBBFu8_N-L7EmZ5G" alt=""/><span></span></div>
      <div className={classes.friendsItem}><img src="https://lh3.googleusercontent.com/proxy/gsypaQM2t0Q1p8puyvfIW8-NOX_B88V61SK529J0Xw8cCxM9R7e65bRZZ4r9kEdDopHhcSye0nzR8yD1M1aqkyZxzKqo17tEr97rPESEgBBFu8_N-L7EmZ5G" alt=""/><span></span></div>
      <div className={classes.friendsItem}><img src="https://lh3.googleusercontent.com/proxy/gsypaQM2t0Q1p8puyvfIW8-NOX_B88V61SK529J0Xw8cCxM9R7e65bRZZ4r9kEdDopHhcSye0nzR8yD1M1aqkyZxzKqo17tEr97rPESEgBBFu8_N-L7EmZ5G" alt=""/><span></span></div>
    </div>
  </nav>
}


export default Nav;