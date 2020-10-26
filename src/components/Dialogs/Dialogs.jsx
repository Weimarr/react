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

   let dialogs = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Max' },
      { id: 3, name: 'Oleg' },
      { id: 4, name: 'Serega' },
      { id: 5, name: 'Sanya' },
      { id: 6, name: 'Yulka' }
   ]

   let messages = [
      { id: 1, message: 'Zdarova' },
      { id: 2, message: 'Pidar ebuchiy' },
      { id: 3, message: 'Nu sho ty?' },
      // { id: 4, message: 'Serega' },
      // { id: 5, message: 'Sanya' },
      // { id: 6, message: 'Yulka' }
   ]

   let dialogsElements = dialogs
      .map(d => <DialogItem name={d.name} id={d.id} />);

   let messageElements = messages
      .map(m => <Message message={m.message} />)

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>

            {dialogsElements}
         </div>
         <div className={classes.messages}>
            {messageElements}
         </div>
      </div>
   )
}

export default Dialogs;