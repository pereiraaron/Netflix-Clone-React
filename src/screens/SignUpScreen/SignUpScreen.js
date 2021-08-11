import React, { useState } from "react";
import "./SignUpScreen.css";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SignUpScreen = ({ popemail }) => {
  const [email, setEmail] = useState(popemail);
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const data = { email: user.email };
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      const data = { email: user.email };
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/");
    } catch (error) {
      alert(error.message);
      dispatch({ type: "USER_LOGIN_FAILURE", payload: error.message });
    }
  };
  return (
    <div className="signupScreen">
      <form className="form">
        {register ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
        <input
          type="email"
          placeholder="Email address"
          className="inputfield"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputfield"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={register ? handleRegister : handleSignIn}
        >
          {register ? "Sign Up" : "Sign In"}
        </button>
        {register ? (
          <h4>
            <span>Already have Netflix?</span>{" "}
            <span
              onClick={() => {
                setRegister(false);
                setEmail("");
                setPassword("");
              }}
            >
              Sign In Now
            </span>
          </h4>
        ) : (
          <h4>
            <span>New to Netflix?</span>{" "}
            <span
              onClick={() => {
                setRegister(true);
                setEmail("");
                setPassword("");
              }}
            >
              Sign Up Now
            </span>
          </h4>
        )}
      </form>
    </div>
  );
};

export default SignUpScreen;
