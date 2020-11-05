import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

   let newPostElement = React.createRef();
   let addPost = () => {
      props.addPost();
   }

   let postsElements = props.posts
      .map((p) => <Post name={p.name} message={p.message} likesCount={p.likesCount} />)

      let postOnChange = () => {
         let text = newPostElement.current.value; 
         props.updateNewPostText(text)
      }
   return <div>
      <div className={classes.newPost}>
         <h3>my post</h3>
         <textarea onChange={postOnChange} ref={newPostElement} value={props.newPostText} cols="70" rows="10"/>
         <div className={classes.btns}>
            <button onClick={addPost}>Add post</button>
            {/* <button>Remove</button> */}
         </div>
      </div>
      <div className={classes.posts}>
         {postsElements}
      </div>
   </div>
}



export default MyPosts;