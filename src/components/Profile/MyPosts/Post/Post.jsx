import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
   return (
      <div className={classes.item}>
         <div className={classes.user_info}>
            <img src="https://i.imgur.com/N0lCLhY.jpg" alt=""/>
            <div className={classes.user_name}>{props.name}</div>
         </div>
         <p>{props.message}</p>
         <span>Like {props.likesCount}</span>
      </div>
   )
}


export default Post;