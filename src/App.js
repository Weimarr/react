import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import Friends from './components/Friends/Friends';



function App(props) {


  return (

    <div className='app-wrapper'>
      <Header />
      <Nav state={props.state.dialogsPage} />
      <div className="app-wrapper-content">
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
        <Route path='/dialogs' render={() => <Dialogs
          store={props.store}
          dispatch={props.dispatch} />} />
        <Route path='/profile' render={() => <Profile
          dispatch={props.dispatch}
          profilePage={props.state.profilePage} />} />
        <Route
          path='/friends'
          render={() => <Friends state={props.state.dialogsPage} />} />
      </div>
    </div>
  );
}


export default App;
