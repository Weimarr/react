import React from 'react';

import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

   let newPostElement = React.createRef();
   let onAddPost = () => {
      props.addPost();
      // props.dispatch(addPostActionCreator()) 
   }

   let postsElements = props.posts
      .map((p) => <Post name={p.name} message={p.message} likesCount={p.likesCount} />)

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
      // let action = updateNewPostTextActionCreator(text);
      // props.dispatch(action);
   }
   return <div>
      <div className={classes.newPost}>
         <h3>my post</h3>
         <textarea placeholder={'Write some text...'} onChange={onPostChange} ref={newPostElement} value={props.newPostText} cols="70" rows="10" />
         <div className={classes.btns}>
            <button onClick={onAddPost}>Add post</button>
            {/* <button>Remove</button> */}
         </div>
      </div>
      <div className={classes.posts}>
         {postsElements}
      </div>
   </div>
}



export default MyPosts;