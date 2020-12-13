import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';




const Dialogs = (props) => {
   let state = props.store.getState().dialogsPage;


   let newMessageText = state.newMessageText;
   let sendMessage = () => {
      props.store.dispatch(sendMessageActionCreator());
   }



   let dialogsElements = state.dialogs
      .map(d => <DialogItem imgUrl={d.imgUrl} name={d.name} id={d.id} isActive={d.isActive} />);

   let messageElements = state.messages
      .map(m => <Message message={m.message} />)
   let messageOnChange = (e) => {
      let text = e.target.value;
      props.store.dispatch(updateNewMessageTextActionCreator(text));
   }
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            <div>{messageElements}</div>
            <div className={classes.createMessage}>
               <textarea placeholder="Enter your message" onChange={messageOnChange} name=""  cols="30" rows="10" value={newMessageText} ></textarea>
               <button onClick={sendMessage}>Send message</button>
            </div>

         </div>
      </div>
   )
}

export default Dialogs;