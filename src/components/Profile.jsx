import React from 'react';
import classes from './Profile.module.css'


const Profile = () => {
   return <div className={classes.content}>
      <div>
         <img src="https://images.pexels.com/photos/239520/pexels-photo-239520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
      </div>
      <div>
         ava+desc
   </div>
      <div>
         my post
   </div>
      <div>
         new post
   </div>
      <div className={classes.posts}>
         <div className={classes.item}>post1</div>
         <div className={classes.item}>post2</div>
      </div>
   </div>
}


export default Profile;