import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addMessage, updateNewPostText, updateNewMessage } from './redux/state';


export let renderTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            addPost={addPost}
            addMessage={addMessage}
            updateNewMessage ={updateNewMessage}
            updateNewPostText={updateNewPostText} />
      </React.StrictMode>,
      document.getElementById('root')
   );
}
