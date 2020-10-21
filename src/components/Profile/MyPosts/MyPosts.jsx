import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
   return <div className="">
      <div>
         my post
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Add post</button>
      <button>Remove</button>
      <div>
         new post
   </div>
      <div className={classes.posts}>
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
      </div>
   </div>
}


export default MyPosts;