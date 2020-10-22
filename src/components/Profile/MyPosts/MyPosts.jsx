import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

   let postData = [
      { id: 1, message: 'Hi, how are you?', likesCount:12 },
      { id: 2, message: 'Its my 1st post!', likesCount:13 },
   ]

   return <div>
      <div className={classes.newPost}>
         <h3>my post</h3>
         <textarea name="" id="" cols="70" rows="10"></textarea>
         <div className={classes.btns}>
            <button>Add post</button>
            <button>Remove</button>
         </div>
      </div>
      <div className={classes.posts}>
         <Post message={postData[0].message} likesCount={postData[0].likesCount} />
         <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
   </div>
}


export default MyPosts;