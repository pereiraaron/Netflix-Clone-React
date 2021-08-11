import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [show, handleShow] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
  }, []);

  const handleSignOut = () => {
    auth.signOut();
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userLogin");
    dispatch({ type: "USER_LOGOUT" });
    history.push("/login");
  };

  return (
    <div className={show ? "nav nav_black" : "nav"}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix_logo"
          onClick={() => history.push("/")}
        />
        <div className="nav_avatar_container">
          <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix_avatar_logo"
            onClick={() => setDropDown(!dropdown)}
          />
          <img
            className="nav_dropdown_icon"
            src={process.env.PUBLIC_URL + "/images/triangle-bottom-arrow.svg"}
            alt="arrow"
            onClick={() => setDropDown(!dropdown)}
          />
        </div>
        {dropdown && (
          <div className="dropdown">
            <p>{userInfo?.email}</p>
            <p onClick={handleSignOut}>Sign Out</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
