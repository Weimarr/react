import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'




const DialogsContainer = (props) => {
   let state = props.store.getState().dialogsPage;

   let sendMessage = () => {
      props.store.dispatch(sendMessageActionCreator());
   }


   let messageOnChange = (text) => {
      props.store.dispatch(updateNewMessageTextActionCreator(text));
   }
   return (
      <Dialogs sendMessage={sendMessage}
         updateNewMessageText={messageOnChange}
         dialogsPage={state}
      />
   )
}


export default DialogsContainer;