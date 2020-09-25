import React from 'react';
import {Link} from 'react-router-dom';
 
function Nav(){
    const navStyle = {
        color:'white'
    }
    return (
        <nav>
            <h1>logo</h1>
            <div className="nav-link">
                <Link style={navStyle} to="/">
                    <li>home</li>
                </Link>
                <Link style={navStyle} to="/Auction">
                    <li>Auction</li>  
                </Link>
                <Link style={navStyle}  to="/Bid">
                    <li>Bid</li>
                </Link>
                
            </div>
        </nav>
    );
}

export default Nav;