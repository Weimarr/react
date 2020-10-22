import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
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
         <Post message='Hi, how are you?' likesCount='15' />
         <Post message='Its my 1st post' likesCount='20' />
         <Post />
         <Post />
         <Post />
      </div>
   </div>
}


export default MyPosts;