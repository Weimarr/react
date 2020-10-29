import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
   return (
      <div className={classes.item}>
         <div className={classes.user_info}>
            <img src="https://lh3.googleusercontent.com/proxy/yGM6yoco47PUL8dd3PRDUmekgSSas2qVA57UDZmoGjI_NzGNBCsr_OUhenFHhtn8ikmUljAvXJ6h34GHX43cIfuNevTy_B2y4HFtz7qlHuE" alt="" />
            <div className={classes.user_name}>{props.name}</div>
         </div>
         <p>{props.message}</p>
         <span>Like {props.likesCount}</span>
      </div>
   )
}


export default Post;