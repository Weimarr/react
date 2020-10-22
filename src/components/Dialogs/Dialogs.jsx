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

   let dialogsData = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Max' },
      { id: 3, name: 'Oleg' },
      { id: 4, name: 'Serega' },
      { id: 5, name: 'Sanya' },
      { id: 6, name: 'Yulka' }
   ]

   let messagesData = [
      { id: 1, message: 'Zdarova' },
      { id: 2, message: 'Pidar ebuchiy' },
      { id: 3, message: 'Nu sho ty?' },
      // { id: 4, message: 'Serega' },
      // { id: 5, message: 'Sanya' },
      // { id: 6, message: 'Yulka' }
   ]

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            {/* <DialogItem name='Max' id='2' />
            <DialogItem name='Oleg' id='3' />
            <DialogItem name='Serega' id='4' />
            <DialogItem name='Sanya' id='5' />
            <DialogItem name='Yulka' id='6' /> */}
         </div>
         <div className={classes.messages}>
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message} />
            <Message message={messagesData[2].message} />
         </div>
      </div>
   )
}

export default Dialogs;