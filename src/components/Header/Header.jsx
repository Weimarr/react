import React from 'react';
import classes from './Header.module.css';


const Header = () => {
   return (
      <header className={classes.header}>
         <img src="https://img.icons8.com/ios/452/doge.png" alt="" />
         <h1>Dogebook</h1>
      </header>
   )
}


export default Header;
