
import { renderTree } from '../index';

let state = {
    profilePage: {
      posts: [
         { id: 1, name: 'Dim Dimych', message: 'Hi, how are you?', likesCount: 12, },
         { id: 2, name: 'Max Vadimych', message: 'Its my 1st post!', likesCount: 13, },
         { id: 3, name: 'Petr Petrovich', message: 'What a time to be alive?', likesCount: 1, },
      ],
     
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
         { id: 2, name: 'Rus', imgUrl: 'https://i.kym-cdn.com/photos/images/original/001/794/038/b9f.png'  },
         { id: 3, name: 'Oleg', imgUrl: 'https://i.redd.it/24xgso9v2fc41.png' },
         { id: 4, name: 'Serega', imgUrl: 'https://i.imgur.com/w6uKzoo.jpg' },
         { id: 5, name: 'Sanya', imgUrl: 'https://i.kym-cdn.com/photos/images/original/001/767/472/445.png' },
         { id: 6, name: 'Yulka', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Doge.png' }
      ]
   }
   
}

export let addPost = (message) => {
   let newPost = {
      id: 4,
      name: 'Jan Janusz',
      message: message,
      likesCount: 0
   }
   state.profilePage.posts.unshift(newPost);
 renderTree();
}

export let addMessage = (message) => {
   let newMessage = {
      id: 6,
      message: message
   }
   state.dialogsPage.messages.push(newMessage);
   renderTree();
}
 
export default state;