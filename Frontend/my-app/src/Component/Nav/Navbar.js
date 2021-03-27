
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from '../Button/Button';
import { Button14 } from '../Button14/Button14';
import  { Fragment } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";






const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  
  
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  const authLinks = (



        
     



<div className='navbar-container'>
<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            LANKA FURNITURE MAKERS
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='/CarouselContainer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                HELP
              </Link>
            </li>


          


            <li className='nav-item'>
              <Link
                to='/viewdesign'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                VIEW DESIGNS
              </Link>
            </li>

             

          
          


          </ul>

           
           
         

        {button && <Button14
          buttonStyle='btn--outline'
          className='nav-links-mobile'
           onClick={closeMobileMenu}

          >
            <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm">SIGN OUT</span>
        </a>
        
        </Button14>}

         

        </div>





  );


  const guestLinks=(


<div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            LANKA FURNITURE MAKERS
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/CarouselContainer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                HELP
              </Link>
            </li>
            
            

            <li className='nav-item'>
              <Link
                to='/customer-sign-in'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>



            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button
          buttonStyle='btn--outline'
          className='nav-links-mobile'
           onClick={closeMobileMenu}

          >SIGN UP</Button>}
        </div>




  )





  return (
    <>
      <nav className='navbar'>
      <Fragment>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </Fragment>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);