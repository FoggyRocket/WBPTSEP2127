import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";



const Navbar = (props) => {
  return (
    <nav>
      <Link to="/" className="nav__projectName">
        Demo-Room - created with Dylan
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to="/protected" className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="authLink">
              Signup
            </Link>
            <Link to="/login" className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
