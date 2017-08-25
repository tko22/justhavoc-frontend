import React, { Component } from 'react';
import profile_icon from '../profile_icon.png'
import search_icon from '../search_icon.png'
import { Route, Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <nav className="topnavbar">
                <div className="header-container">
                    <div className="header-nav-logo">
                        <Link to="/"><img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png" alt="logo of JustHavoc"id="App-logo" width="120" height="45"/></Link>
                    </div>
                    <div className="header-nav-left">

                        <span className="header-text-span"><Link to="/clothing">CLOTHING</Link></span>
                        <span className="header-text-span"><Link to="/others">OTHERS</Link></span>
                        <span className="header-text-span"><Link to="/about-us">ABOUT US</Link></span>

                    </div>
                    <div className="header-nav-right">
                        <span className="header-icon-span"><a href="#"><img src={profile_icon} alt="profile icon" width="20" height="20"/></a></span>
                        <span className="header-icon-span"><a href="#"><img src={search_icon} alt="search icon" width="20" height="20"/></a></span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
