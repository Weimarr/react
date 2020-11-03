import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
   return (
      <div className={classes.item}>
         <div className={classes.user_info}>
            <img src="https://lh3.googleusercontent.com/proxy/em-TwkA7FBd-a8NVprjrFURUgixhz8Qw6k5QqMSXEtIaOKaMS_q9qpFRE5EG4A0KdmamjcTEXUxH_FEVNkH5VWPIOzVbg-XHDZrh8oHYzQQ" alt="" />
            <div className={classes.user_name}>{props.name}</div>
         </div>
         <p>{props.message}</p>
         <span>Like {props.likesCount}</span>
      </div>
   )
}


export default Post;