import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <div>
           <ul>
            <li>
                <a className="link" href="/users">Get users</a>
            </li>
           </ul>
        </div>
    );
}

export default Navbar;