const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Have a good day!' },
      { id: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam perferendis iusto id cumque maiores at, voluptates, voluptatem officiis delectus vitae, rem sunt quibusdam velit facere eaque ullam est ipsa?" }
   ],
   dialogs: [
      { id: 1, name: 'Zhekich', isActive: true, imgUrl: 'https://i.redd.it/k5ftx3xap9e31.png' },
      { id: 2, name: 'Rus', imgUrl: 'https://i.kym-cdn.com/photos/images/original/001/794/038/b9f.png' },
      { id: 3, name: 'Oleg', imgUrl: 'https://i.redd.it/24xgso9v2fc41.png' },
      { id: 4, name: 'Serega', imgUrl: 'https://i.imgur.com/w6uKzoo.jpg' },
      { id: 5, name: 'Sanya', imgUrl: 'https://i.kym-cdn.com/photos/images/original/001/767/472/445.png' },
      { id: 6, name: 'Yulka', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Doge.png' }
   ],
   newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {

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