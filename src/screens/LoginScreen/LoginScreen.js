import React, { useState } from "react";

import SignupScreen from "../SignUpScreen/SignUpScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        {!signIn && (
          <button
            className="loginScreen_button"
            onClick={(e) => {
              e.preventDefault();
              setSignIn(true);
            }}
          >
            Sign In
          </button>
        )}
        <div className="loginScreen_gradient" />
      </div>
      <div className={signIn ? "signupScreen_body" : "loginScreen_body"}>
        {signIn ? (
          <SignupScreen popemail={email} />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen_input">
              <form>
                <input
                  type="email"
                  placeholder="Email address"
                  className="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="loginScreen_getStarted"
                  onClick={(e) => {
                    e.preventDefault();
                    setSignIn(true);
                  }}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
