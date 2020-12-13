const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
export const dialogsReducer = (state, action) => {

   switch (action.type) {
      case UPDATE_MESSAGE_TEXT:
         state.newMessageText = action.messageText;
         return state;
      case SEND_MESSAGE:
         let text = state.newMessageText;
         state.newMessageText = '';
         state.messages.push({ id: 7, message: text });
         return state;
      default:
         return state;
   }
}

export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_MESSAGE_TEXT,
      messageText: text
   }
}
export const sendMessageActionCreator = (text) => {
   return {
      type: SEND_MESSAGE,
      text: text
   }
}

export default dialogsReducer; 