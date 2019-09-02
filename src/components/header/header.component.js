import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.style.scss";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-center">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? <CartDropdown /> : ""}
    </div>
  );
};

const mapeStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapeStateToProps)(Header);
