import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';


let renderTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            dispatch={store.dispatch.bind(store)}
            // addMessage={store.addMessage.bind(store)}
            // updateNewMessage ={store.updateNewMessage.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)} 
            />
      </React.StrictMode>,
      document.getElementById('root')
   );
}
renderTree(store.getState());
store.subscribe(renderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
