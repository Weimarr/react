import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
   return (
      <div>
         <div>
            <img src="https://i.pinimg.com/originals/18/b5/64/18b564639ac6354ebecdcc9bf1bbad54.jpg" alt="" className={classes.bg} />
         </div>
         <div className={classes.profile_data}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVWJ6q2QHoeCc_VK-fBB3AZKv9dN2ECoda5Q&usqp=CAU" alt="" className={classes.avatar} />
            <div className={classes.desc}> Max Demeshok <br />
      Frontend Developer
   </div>
         </div>
      </div>
   )
}

export default ProfileInfo;