import React from "react";
import "../styles/Navbar.css";
import { Logo } from "../assets/images";

const Navbar = () => {
    return (
        <div>
            <div className="logo">
                <img src={Logo} alt="" />
                <span className="logo-title">upraised</span>
            </div>
        </div>
    );
};

export default Navbar;
