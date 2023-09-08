import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  setUser,
  setIsLogin,
  updatePassword,
  setStatusFail,
} from "../../App/features/userSlice";
import { setLoginError } from "../../App/features/selectedAlbumSlice";
import { useDispatch } from "react-redux";
import ErrorPage from "../Error/Error";
import TextField from "@mui/material/TextField";

function Login() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const isUpdate = useSelector((state) => state.user.isUpdate);
  const user = useSelector((state) => state.user.user);
  const loginError = useSelector((state) => state.selectedAlbum.loginError);
  const statusFail = useSelector((state) => state.user.statusFail);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const [message, setMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (isLogin && !isUpdate) {
      navigate("/");
    }
  }, [isLogin, isUpdate]);
  const handleLogin = async () => {
    const url = "https://academics.newtonschool.co/api/v1/user/login";
    const data = {
      email: email,
      password: password,
      appType: "music",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: "1s5h62ytwc1r", // Your provided project ID
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        const token = responseData.token;
        console.log("Token:", token);
        const userDetails = {
          name: responseData.data.name,
          email: responseData.data.email,
          token: responseData.token,
        };
        // localStorage.setItem("userDetails", JSON.stringify(userDetails));
        dispatch(setUser({ userDetails }));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setStatusFail(true));
        console.error("Login was not successful:", responseData);
      }
    } catch (error) {
      setLoginFail(true);
      setMessage(error.message);
      console.error("Error:", error);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    if (email == "" && password == "") {
      setError(true);
      return;
    }
    handleLogin();
  };

  const signup = () => {
    navigate("/signup");
  };
  const url2 =
    "https://academics.newtonschool.co/api/v1/user/updateMyPassword,";
  // {"status":"success","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTc1YmRlYzhmN2MxZDY1OTkyZDBjNyIsImlhdCI6MTY5MzEzODU1NywiZXhwIjoxNzI0Njc0NTU3fQ.DGJMV7iWizt0HfKeQ9jdU1C60sKcINUxjU6Y9QZSSWA","data":{"_id":"64e75bdec8f7c1d65992d0c7","name":"abcde","email":"admin@gmail.com","password":"$2a$10$3W7CEEfbGcMLxP/AQrCqWeVhMbDum5EmJIkeH0favx3dfDMjNT.Ja","skills":[],"workExprience":[],"education":[],"createdAt":"2023-08-24T13:32:14.229Z","__v":0}}
  const handleUpdatePassword = async () => {
    const updatedData = {
      name: name,
      email: email,
      passwordCurrent: password,
      password: newPassword,
      appType: "music",
    };
    try {
      const response = await fetch(url2, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          projectId: "1s5h62ytwc1r",
        },
        body: JSON.stringify({ updatedData }),
      });
    } catch (error) {
      dispatch(setLoginError());
      console.log(error);
    }
    const responseData = await response.json();
    if (response.ok) {
      const token = responseData.token;
      console.log("Token:", token);
    }
  };
  return (
    <div className="login">
      {loginFail && <ErrorPage msg={message} />}
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="Amazon logo"
      />
      {/* </Link> */}

      <div className="login__container">
        <h2 style={{ textAlign: "center" }}>Sign-in</h2>
        {statusFail && (
          <p style={{ color: "red" }}>Incorrect Email Or Password</p>
        )}
        {error && (
          <p style={{ color: "red" }}>All Details Is Mandatory,Please Fill</p>
        )}
        <form>
          <h5>E-mail</h5>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isUpdate && (
            <>
              <h5>New Password</h5>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </>
          )}
          {!isUpdate ? (
            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Sign In
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleUpdatePassword}
              className="login__signInButton"
            >
              Update Password
            </button>
          )}
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={signup} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
