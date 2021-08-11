import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import "./ProfileScreen.css";

const ProfileScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    auth.signOut();
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userLogin");
    dispatch({ type: "USER_LOGOUT" });
    history.push("/login");
  };
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [userInfo, history]);

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{userInfo?.email}</h2>
            <div className="profileScreen__plans">
              <button
                className="profileScreen__signout"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
