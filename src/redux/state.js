const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, name: 'Dim Dimych', message: 'Hi, how are you?', likesCount: 12, },
            { id: 2, name: 'Max Vadimych', message: 'Its my 1st post!', likesCount: 13, },
            { id: 3, name: 'Petr Petrovich', message: 'What a time to be alive?', likesCount: 1, },
         ],
         newPostText: 'Write some text...'

      },
      dialogsPage: {
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

   },
   _callSubscriber() { },


   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },


   // addPost() {
   //    let newPost = {
   //       id: 4,
   //       name: 'Jan Janusz',
   //       message: this._state.profilePage.newPostText,
   //       likesCount: 0
   //    }
   //    this._state.profilePage.posts.unshift(newPost);
   //    this._state.profilePage.newPostText = '';
   //    this._callSubscriber(this._state);
   // },
   // updateNewPostText(newText) {

   //    this._state.profilePage.newPostText = newText;
   //    this._callSubscriber(this._state);
   // },
   updateNewMessage(newMessage) {
      this._state.dialogsPage.newMessageText = newMessage;
      this._callSubscriber(this._state);
   },
   addMessage(message) {
      let newMessage = {
         id: 6,
         message: message
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
   },
   dispatch(action) { // { type: 'ADD-POST' }
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: 4,
            name: 'Jan Janusz',
            message: this._state.profilePage.newPostText,
            likesCount: 0
         }
         this._state.profilePage.posts.unshift(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }
      else if (action.type === UPDATE_MESSAGE_TEXT) {
         this._state.dialogsPage.newMessageText = action.messageText;
         this._callSubscriber(this._state);
      }
      else if (action.type === SEND_MESSAGE) {
         let text = this._state.dialogsPage.newMessageText;
         this._state.dialogsPage.newMessageText = '';
         this._state.dialogsPage.messages.push({ id: 7, message: text },);
         this._callSubscriber(this._state);
      }
   }

}

export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}
export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT, 
      newText: text
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



export default store;

window.store = store;