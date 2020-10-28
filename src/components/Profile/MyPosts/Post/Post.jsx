import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
   return (
      <div className={classes.item}>
         <div className={classes.user_info}>
            <img src="https://lh3.googleusercontent.com/proxy/Wtx-6WTyfhUEGl3vSv8H9exBqenRRKwRnOinV9VRDZjagSdFyOth-Eqr-QhcLaIhJn6NAaEV8YJQK5mr6tBFsG3bn9l0OoKzGv7Cv6bYrUs" alt="" />
            <div className={classes.user_name}>{props.name}</div>
         </div>
         <p>{props.message}</p>
         <span>Like {props.likesCount}</span>
      </div>
   )
}


export default Post;