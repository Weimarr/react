import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {


   return (
      <div>
         <ProfileInfo />
         <MyPosts
            
            dispatch={props.dispatch}
            
            posts={props.profilePage.posts} />
      </div>
   )


}

export default Profile;