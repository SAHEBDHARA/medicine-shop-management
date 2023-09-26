import { Fragment } from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import { Link } from 'react-router-dom';


const Header = (props) => {
 
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Medicine Store</h1>
        <div className={classes.side}>
        <Link to="/add-medicine">
             <div className={classes.addbutton}>
            <p className={classes.text}>Add Medicine</p>
        </div>
        </Link>
        <HeaderCartButton onClick ={props.noShowHanderler}/>
       
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src="https://img.freepik.com/premium-photo/drugstore-furnished-with-numerous-glass-display-cabinets-filled-with-different-pharmaceutical-drugs-beauty-products_259150-55666.jpg?w=996" alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;