import React, { useState, useEffect } from 'react';
import './LogoBar.css';
import Image from './Logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import { setIsCartOpen } from '../Shop/ProductStore';

function Logobar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const cart = useSelector((state) => state.products.cart);
  const [name, setName] = useState("MY ACCOUNT"); // Initialize name as "MY ACCOUNT"
  const user = JSON.parse(localStorage.getItem("user"));
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const userFirstName = user ? user?.firstName : "MY ACCOUNT";

    if (userFirstName) {
      setName(userFirstName); // Set the name to the user's first name if it exists
    }
  }, [user]);

  let navbarClass = 'navbar-dashboard';
  let Color = '#fff';

  if (location.pathname === '/') {
    navbarClass = 'navbar';
    Color = '#000';
  } else {
    Color = '#fff';
  }

  const handleMyAccountClick = () => {
    if (user) {
      // If the user is logged in, navigate to the account dashboard
      navigate('/dashboard/myaccount');
    } else {
      // If the user is not logged in, show login and signup options
      setShowOptions(!showOptions);
    }
  };

  return (
    <nav className={navbarClass}>
      <div className='left-bar bars'>
        <div className='boxs'>
          <p onClick={() => { navigate('/community') }}>COMMUNITY</p>
        </div>
        <div className='boxs'>
          <p >TUTORIALS</p>
        </div>
        <div className='boxs'>
          <p onClick={() => { navigate('/shop') }}>SHOP</p>
        </div>
      </div>
      <div className="center-logo">
        <img onClick={() => { navigate('/') }} src={Image} alt="Logo" />
      </div>
      <div className='right-bar bars'>
        <div className='boxs'>
          <p onClick={() => { navigate('/login') }}>NOTIFICATIONS</p>
        </div>
        <div className='boxs'>
          <p onClick={handleMyAccountClick}>{name}</p>
          {showOptions && (
            <div className='options'>
              <p onClick={() => {navigate('/login'); setShowOptions(!showOptions);}}>Login</p>
              <p onClick={() => {navigate('/signup'); setShowOptions(!showOptions);}}>Signup</p>
            </div>
          )}
        </div>
        <Badge
          badgeContent={cart.length}
          invisible={cart.length === 0}
          sx={{
            "& .MuiBadge-badge": {
              right: -7,
              top: -7,
              padding: " 0 4px",
              height: "14px",
              minWidth: "13px",
              color: { Color },
            },
          }}
        >
          <div className='boxs box-cart' onClick={() => dispatch(setIsCartOpen({}))}>
            <p>CART</p>
          </div>
        </Badge>
      </div>
    </nav>
  );
}

export default LoadingPage(Logobar);
