import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../redux/state';


const Profile = (props) => {


   return (
      <div>
         <ProfileInfo />
         <MyPosts addPost={props.addPost} posts={props.state.posts} />
      </div>
   )


}

export default Profile;