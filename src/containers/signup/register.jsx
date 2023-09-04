import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsLogin, setUser } from "../../App/features/userSlice";
import TextField from "@mui/material/TextField";

const Register = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleSignUp = async () => {
    const url = "https://academics.newtonschool.co/api/v1/user/signup";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: "1s5h62ytwc1r",
        },
        body: JSON.stringify({ name, password, email, appType: "music" }),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.status === "fail") {
        alert(responseData.message);
      } else {
        const userDetails = {
          name: responseData.data.user.name,
          email: responseData.data.user.email,
          token: responseData.token,
        };
        console.log(userDetails.name);
        // dispatch(setIsLogin(true));
        dispatch(setUser({ userDetails }));
        navigate("/login");
      }
    } catch (error) {
      alert(error);
      console.error("Error:", error);
    }
  };
  const validation = (name, email, password) => {
    console.log(name, email, password);
    let errorName = name.length < 4 ? true : false;
    let errorEmail = !email.includes("@") ? true : false;
    let errorPassword = password.length < 5 ? true : false;
    console.log(errorName, errorEmail, errorPassword);
    // if (!errorName && !errorEmail && !errorPassword) {
    //   return true;
    // }
    const errorObject = { errorName, errorEmail, errorPassword };
    return errorObject;
  };
  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError(false);
    setErrorName(false);
    setErrorEmail(false);
    setErrorPassword(false);
  };
  const register = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || password == "") {
      setError(true);
      return;
    }
    const valid = validation(name, email, password);
    const { errorName, errorEmail, errorPassword } = valid;
    if (errorName || errorEmail || errorPassword) {
      setErrorName(errorName);
      setErrorEmail(errorEmail);
      setErrorPassword(errorPassword);
      return;
    }
    handleSignUp();
    reset();
  };

  return (
    <div className="login">
      {/* <Link to='/'> */}
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="Amazon logo"
      />
      {/* </Link> */}

      <div className="login__container">
        <h2 style={{ textAlign: "center" }}>Create Account</h2>
        {error && (
          <p style={{ color: "red" }}>All Details Is Mandatory,Please Fill</p>
        )}
        <form>
          <label
            htmlFor="name"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Name
          </label>
          <TextField
            fullWidth
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errorName && (
            <p style={{ color: "red" }}>Name should atleast 3 character</p>
          )}
          <label htmlFor="email">Email</label>
          <TextField
            fullWidth
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <p style={{ color: "red" }}>Please enter valid email</p>
          )}
          <label htmlFor="password">Password</label>
          <TextField
            fullWidth
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorPassword && (
            <p style={{ color: "red" }}>Password should atleast 6 character</p>
          )}
          <button onClick={register} className="login__signInButton">
            Register
          </button>
        </form>

        <p>
          Already have an account? Sign in Buying for work? Create a free
          business account By creating an account or logging in, you agree to
          Amazon’s Conditions of Use and Privacy Policy.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="login__registerButton"
        >
          Already have an account
        </button>
      </div>
    </div>
  );
};

export default Register;
