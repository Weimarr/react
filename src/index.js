import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount:12 },
  { id: 2, message: 'Its my 1st post!', likesCount:13 },
]
let dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Max' },
  { id: 3, name: 'Oleg' },
  { id: 4, name: 'Serega' },
  { id: 5, name: 'Sanya' },
  { id: 6, name: 'Yulka' }
]

let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Have a good day!' },
  { id: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam perferendis iusto id cumque maiores at, voluptates, voluptatem officiis delectus vitae, rem sunt quibusdam velit facere eaque ullam est ipsa?" },
  // { id: 4, message: 'Serega' },
  // { id: 5, message: 'Sanya' },
  // { id: 6, message: 'Yulka' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
