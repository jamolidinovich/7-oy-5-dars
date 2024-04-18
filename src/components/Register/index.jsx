import "./index.css";
import user from "../../assets/user.svg";
import sms from "../../assets/sms.png";
import lock from "../../assets/lock.png";
import google from "../../assets/google.png";
import { add } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
function Register() {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () => {
    setDark(!dark);
  };

  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRed = useRef(null);
  const navigate = useNavigate();

  function handelClick(e) {
    e.preventDefault();

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRed.current.value,
    };
    const userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON);
    dispatch(add(user));
    navigate("/login");
  }
  return (
    <div>
      <form>
        <div className="container">
          <h1 className="h1">Let’s go!</h1>
          <div className="form-input">
            <div>
              <label htmlFor="username">Full Name</label>
              <br />
              <img className="sms-icon" src={user} alt="" />
              {/* <LuUser className="sms-icon"></LuUser> */}
              <input
                className="input-name"
                type="text"
                id="username"
                name="username"
                placeholder="John Doe"
                ref={nameRef}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <img className="sms-icon" src={sms} alt="" />

              {/* <MdOutlineMailOutline className="sms-icon"></MdOutlineMailOutline> */}
              <input
                className="input-name"
                type="email"
                id="email"
                name="email"
                placeholder="example@site.com"
                ref={emailRef}
              />
            </div>
            <div>
              <label htmlFor="password">Choose Password</label>
              <br />
              <img className="sms-icon" src={lock} alt="" />

              {/* <MdOutlineLock className="sms-icon" /> */}
              <input
                className="input-name"
                type="password"
                id="password"
                name="password"
                placeholder="Minimum 8 characters"
                ref={passwordRed}
              />
              <span className="show">Show</span>
            </div>
          </div>
          <button onClick={handelClick} className="sign">
            Sign Up
          </button>
          <div className="google">
            <button className="gogle-btn">
              <img src={google} alt="" />
              Sign Up with Google
            </button>
            <span className="sso">or login with SSO</span>
            <div className="line"></div>
            <p className="p">
              By lobby the button above, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
