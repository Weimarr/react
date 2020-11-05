import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {


   return (
      <div>
         <ProfileInfo />
         <MyPosts
            newPostText={props.profilePage.newPostText}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            posts={props.profilePage.posts} />
      </div>
   )


}

export default Profile;