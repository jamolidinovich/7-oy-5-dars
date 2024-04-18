import "./index.css";
import eye from "../../assets/eye.png";
import sms from "../../assets/sms.png";
import lock from "../../assets/lock.png";
import google from "../../assets/google.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
// import { useSelector } from "react-redux";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  function handelClick(e) {
    e.preventDefault();
    navigate("/");
  }
  function handelSave(e) {
    e.preventDefault();
    // localStorage dan foydalanuvchi ma'lumotlarini o'qish
    // localStorage dan foydalanuvchi ma'lumotlarini o'qish
    // localStorage dan foydalanuvchi ma'lumotlarini o'qish
    const storedUserJSON = localStorage.getItem("user");

    if (storedUserJSON) {
      const storedUser = JSON.parse(storedUserJSON);

      // Kiritilgan email va password
      const enteredEmail = emailRef.current.value;
      const enteredPassword = passwordRef.current.value;

      // Saqlangan email va password
      const storedEmail = storedUser.email;
      const storedPassword = storedUser.password;

      // Email va passwordni tekshirish
      if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        // Home pagega o'tish
        // window.location.href = "/home";
        navigate("/home");
      } else {
        // Xatolik xabari
        alert("Email or password is incorrect");
      }
    } else {
      console.log("User data not found in localStorage");
    }

    // navigate("/home");
  }
  return (
    <div>
      <form>
        <div className="container">
          <h1 className="h1">Welcome back!</h1>
          <div className="form-input">
            <div>
              <label className="label" htmlFor="email">
                Email
              </label>
              <br />
              <img className="sms-icon" src={sms} alt="" />

              <input
                className="input-name"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                ref={emailRef}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <img className="sms-icon" src={lock} alt="" />

              <input
                className="input-name"
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                ref={passwordRef}
              />
              <span className="show">
                <img src={eye} alt="" />
              </span>
              <span className="forget">Frogot Password?</span>
            </div>
          </div>
          <button onClick={handelSave} className="sign">
            Save
          </button>
          <button onClick={handelClick} className="sign">
            Log In
          </button>
          <div className="google">
            <button className="gogle-btn">
              <img src={google} alt="" />
              Login with Google
            </button>
            <span className="sso">or login with SSO</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
