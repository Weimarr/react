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
    <div className={`${classes.item} ${classes.friends}`}>
      <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
      <div className={classes.friendsList}>
        <div className={classes.friendsItem}>
          <div className={classes.imgBlock}>
          <img src={props.state.dialogs[0].imgUrl} alt="" /></div><span>{props.state.dialogs[0].name}</span></div>
        <div className={classes.friendsItem}><div className={classes.imgBlock}>
        <img src={props.state.dialogs[1].imgUrl} alt="" /></div><span>{props.state.dialogs[1].name}</span></div>
        <div className={classes.friendsItem}><div className={classes.imgBlock}>
        <img src={props.state.dialogs[2].imgUrl} alt="" /></div><span>{props.state.dialogs[2].name}</span></div>
      </div>

    </div>
  </nav>
}


export default Nav;