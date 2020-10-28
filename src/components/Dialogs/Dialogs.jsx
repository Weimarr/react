import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {

  



   let dialogsElements = props.dialogs
      .map(d => <DialogItem name={d.name} id={d.id} />);

   let messageElements = props.messages
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