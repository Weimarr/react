import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {

  



   let dialogsElements = props.state.dialogs
      .map(d => <DialogItem imgUrl={d.imgUrl} name={d.name} id={d.id} isActive={d.isActive}/>);

   let messageElements = props.state.messages
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