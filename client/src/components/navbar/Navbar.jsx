import React, { useContext, useState } from 'react'
import './navbar.scss'
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';
const Navbar = () => {
    const[isScrolled,setIsScrolled]=useState(false);
    const {dispatch}=useContext(AuthContext);
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return() => (window.onscroll=null);
    }

  return (
    <div className={isScrolled?"navbar scrolled":"navbar"}>
        <div className="container1">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            
            <Link to="/" className='link'>
            <span>Homepage</span>
            </Link>
            <Link to="/series" className='link'>
                <span>Series</span>
            </Link>
            <Link to="/movies" className='link'>
                <span>Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>

            </div>
            <div className="right">
                    <Search className='icon'/>
                    <span>KID</span>
                    <Notifications className='icon'/>
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png" alt="" />  
                    
                    <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={()=>dispatch(logout)}>Logout</span>
                    </div>
                    </div>
                    
            </div>
        </div>
        </div>
  )
}

export default Navbar