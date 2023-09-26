import { Fragment } from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
 
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Medicine Store</h1>
        <div className={classes.side}>
             <div className={classes.addbutton}>
            <p className={classes.text}>Add Medicine</p>
        </div>
        <HeaderCartButton onClick ={props.noShowHanderler}/>
       
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src="" alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;