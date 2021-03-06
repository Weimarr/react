const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

   posts: [
      { id: 1, name: 'Dim Dimych', message: 'Hi, how are you?', likesCount: 12, },
      { id: 2, name: 'Max Vadimych', message: 'Its my 1st post!', likesCount: 13, },
      { id: 3, name: 'Petr Petrovich', message: 'What a time to be alive?', likesCount: 1, },
   ],
   newPostText: ''
}

export const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 4,
            name: 'Jan Janusz',
            message: state.newPostText,
            likesCount: 0
         }

         state.posts.unshift(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;
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

export default profileReducer;