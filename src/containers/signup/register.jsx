import React, { useState } from "react";
// import "./register.css"
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setUser } from "../../App/features/userSlice";
const Register = () => {
  const dispatch = useDispatch();
  // const user = useSelector(state=>state.user);
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);
    const [errorName ,setErrorName] = useState(false);
    const [errorEmail ,setErrorEmail] = useState(false);
    const [errorPassword ,setErrorPassword] = useState(false);


    const handleSignUp = async () => {
      const url = "https://academics.newtonschool.co/api/v1/user/signup";
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectId: "1s5h62ytwc1r",
          },
          body: JSON.stringify({name,password,email,appType: 'music'}),
        });
  
        const responseData = await response.json();
        navigate("/login");
        console.log(responseData);
        // dispatch(setUser(responseData));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const register = (e) =>{
      e.preventDefault();
      if(name=="" || email=="" || password==""){
        setError(true);
        return
      }
      if(name.length<4){
       setErrorName(true);
       return 
      }
      if(!email.includes("@")){
       setErrorEmail(true);
       return 
      }
      if(password<5){
       setErrorPassword(true);
       return 
      }
        handleSignUp();

    }

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
        <h1>Create Account</h1>
        {error && <p style={{color:'red'}}>All Details Is Mandatory,Please Fill</p>}
        <form>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errorName && <p style={{color:'red'}}>Name should atleast 3 character</p>}
          <label htmlFor="email">Email</label>
          <input
          id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && <p style={{color:'red'}}>Please enter valid email</p>}
          <label htmlFor="password">Password</label>
          <input
          id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorPassword && <p style={{color:'red'}}>Password should atleast 6 character</p>}
          <button
            onClick={register}
            className="login__signInButton"
          >
            Register
          </button>
        </form>

        <p>
          Already have an account? Sign in Buying for work? Create a free
          business account By creating an account or logging in, you agree to
          Amazon’s Conditions of Use and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Register;
