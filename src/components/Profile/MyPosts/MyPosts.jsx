import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {



   let postsElements = props.posts
      .map((p) => <Post name={p.name} message={p.message} likesCount={p.likesCount} />)

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
         {postsElements}
      </div>
   </div>
}



export default MyPosts;