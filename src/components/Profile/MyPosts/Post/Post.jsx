import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
   return (
      <div className={classes.item}>
         <img src="https://images.pexels.com/photos/1250426/pexels-photo-1250426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
         <p>{props.message}</p>
         <span>Like {props.likesCount}</span>
      </div>
   )
}


export default Post;