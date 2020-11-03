import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {

   let addNewMessage = React.createRef();
   let addMessage = () => {
      let newMessage = addNewMessage.current.value;
      props.addMessage(newMessage)
      addNewMessage.current.value = '';
   }



   let dialogsElements = props.state.dialogs
      .map(d => <DialogItem imgUrl={d.imgUrl} name={d.name} id={d.id} isActive={d.isActive} />);

   let messageElements = props.state.messages
      .map(m => <Message message={m.message} />)

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            <div>{messageElements}</div>
            <div className={classes.createMessage}>
               <textarea name="" ref={addNewMessage} cols="30" rows="10"></textarea>
               <button onClick={addMessage}>Add message</button>
            </div>

         </div>
      </div>
   )
}

export default Dialogs;