import React from 'react';
import DialogItem from '../Dialogs/Dialogitem/DialogItem';
import classes from './Friends.module.css';
const Friends = (props) => {

   let friendsList = props.state.dialogs
   .map( f => <DialogItem imgUrl={f.imgUrl} name={f.name} id={f.id} />)
   return(
      <div className={classes.friendsPage}>
         <h1>Friends</h1>
         <div className={classes.friendsList}>
         {friendsList}
         </div>
         
      </div>
   )
}


export default Friends;