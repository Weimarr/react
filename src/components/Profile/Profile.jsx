import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
   return (
      <div>
         <div>
            <img src="https://images.pexels.com/photos/239520/pexels-photo-239520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className={classes.bg} />
         </div>
         <div className={classes.profile_data}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVWJ6q2QHoeCc_VK-fBB3AZKv9dN2ECoda5Q&usqp=CAU" alt="" className={classes.avatar} />
            <div className={classes.desc}> Max Demeshok <br />
            Frontend Developer
         </div>
         </div>
         <MyPosts />
      </div>
   )
}


export default Profile;