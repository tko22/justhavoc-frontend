import React, { Component } from 'react';
import profile_icon from '../profile_icon.png'
import search_icon from '../search_icon.png'

class Header extends Component{
    render(){
        return(
            <nav className="topnavbar">
                <div className="header-container">
                    <div className="header-nav-logo">
                        <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png" alt="logo of JustHavoc"id="App-logo" width="120" height="45"/>
                    </div>
                    <div className="header-nav-left">

                        <span className="header-text-span"><a href="#">CLOTHING</a></span>
                        <span className="header-text-span"><a href="#">OTHERS</a></span>

                    </div>
                    <div className="header-nav-right">
                        <span className="header-icon-span"><a href="#"><img src={profile_icon} alt="profile icon" width="25" height="25"/></a></span>
                        <span className="header-icon-span"><a href="#"><img src={search_icon} alt="search icon" width="25" height="25"/></a></span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
