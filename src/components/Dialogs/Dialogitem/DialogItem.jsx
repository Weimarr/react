import React from 'react';
import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   let path = `/dialogs/${props.id}`;

   return (
      <div className={classes.dialogItem}>
         <NavLink to={path} className={classes.dialog} activeClassName={classes.active}>
            <img src={props.imgUrl} alt="" />
            {props.name}
         </NavLink>
      </div>)
}

export default DialogItem;