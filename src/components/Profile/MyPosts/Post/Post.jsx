import React from 'react';
import classes from './Post.module.css'

const Post = () => {
   return (
      <div className={classes.item}>
         <img src="https://images.pexels.com/photos/1250426/pexels-photo-1250426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
         <p>Lorem ipsum dolor sit amet.</p>
         <span>Like</span>
      </div>
   )
}


export default Post;