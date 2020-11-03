import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import { addPost, addMessage } from './redux/state';


function App(props) {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.dialogsPage} />
        <div className="app-wrapper-content">
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
          <Route path='/dialogs' render={() => <Dialogs addMessage={props.addMessage} state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile addPost={props.addPost} state={props.state.profilePage} />} />
          <Route path='/friends' render={() => <Friends state={props.state.dialogsPage} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
