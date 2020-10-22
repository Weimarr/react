import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   let path = `/dialogs/${props.id}`;
   //${classes.active}
   return (
      <div className={`${classes.dialog} `}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>)
}
const Message = (props) => {
   return (
      <div className={classes.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <DialogItem name='Dimych' id='1' />
            <DialogItem name='Max' id='2' />
            <DialogItem name='Oleg' id='3' />
            <DialogItem name='Serega' id='4' />
            <DialogItem name='Sanya' id='5' />
            <DialogItem name='Yulka' id='6' />
         </div>
         <div className={classes.messages}>
            <Message message='Zdarova' />
            <Message message='Pidor ebuchiy' />
            <Message message='Nu sho ty?' />
         </div>
      </div>
   )
}

export default Dialogs;