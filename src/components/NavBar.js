import React from 'react'

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

import { Link } from "react-router-dom";
import { FaSistrix, FaTelegramPlane } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";


const NavBar = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='navbar'>
      <div className='navbar_first'>
        <div className='navbar_first_logo'>
          <img id='homelogo' src='/images/aa.png' alt='' />
        </div>
      </div>
      <div className='navbar_middle'>
        <div className='search_option_middle'>
          <input type="text" className='search_option' placeholder='Search meetster' />
          <FaSistrix className='searchIcon' />
        </div>
      </div>
      {/* <div className='navbar_last'>
       <Link className='navbar-icons-link' to="/home" ><li><MdHome className='navbar_icons' /></li></Link> 
       <Link to="/messages" ><li><FaTelegramPlane className='navbar_icons'/></li></Link>
        <li><FaRegCompass className='navbar_icons'/></li>
        <li><FaRegHeart className='navbar_icons'/></li>
       <Link to="/profile" ><li><BiUserCircle className='navbar_icons'/></li></Link>
      </div> */}

      <div className="navbariconsection">
        <Link to="/home" className='naviconlinks' >
          <div className="homeicon navbaricons ">
            <img className='naviconimages' src="images/home.png" alt="" />
            <p className='naviconnames' >Home</p>
          </div>
        </Link>
        <Link to="/friends" className='naviconlinks' >
          <div className="friendsicon navbaricons">
            <img className='naviconimages' src="images/friends.png" alt="" />
            <p className='naviconnames' >My Friends</p>
          </div>
        </Link>
        <Link to="/messages" className='naviconlinks' >
          <div className="messagesicon navbaricons">
            <img className='naviconimages' src="images/messages.png" alt="" />
            <p className='naviconnames' >Messages</p>
          </div>
        </Link>
        <Link to="/profile" className='naviconlinks' >
          <div className="profileicon navbaricons">
            <img className='naviconimages' src="images/profile.png" alt="" />
            <p className='naviconnames' >Profile</p>
          </div>
        </Link>

        {/* <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div> */}

        {/* <div className="p-4 box mt-3 text-center"> */}
          {/* Hello Welcome <br /> */}
          {/* {user && user.email} */}
        {/* </div> */}
        <div className="d-grid gap-2">
          <Button id='logoutbutton' variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>

      </div >
    </div >
  )
}

export default NavBar;