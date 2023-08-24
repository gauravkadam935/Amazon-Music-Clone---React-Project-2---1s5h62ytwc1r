import React, { useState } from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);


    const handleLogin = async () => {
        const url = "https://academics.newtonschool.co/api/v1/user/login";
        const data = {
          email:email,
          password:password,
          appType: 'music'
        };
        console.log(data);
    
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
    
          if (response.ok) {
            const token = responseData.token;
            console.log("Token:", token);
            localStorage.setItem("sound_cloud_token", JSON.stringify(token));
    
            // setUserName(responseData.data.name);
            // setLogin(true);
            // setLoginPage(false);
            navigate("/");
            // Save the token to a secure storage mechanism
          } else {
            console.error("Login was not successful:", responseData);
            // Handle unsuccessful login here
            // setError("Login was not successful! Try using Google");
          }
        } catch (error) {
          console.error("Error:", error);
          // Handle errors here
        //   setError("Something Went Wrong! Try login with google");
        }
      };

    const signIn  = e =>{
        e.preventDefault();
        if(email == "" && password == ""){
            setError(true);
            return
        }
        handleLogin();
    }


    return (
        <div className='login'>
            {/* <Link to='/'> */}
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt="Amazon logo"
                />
            {/* </Link> */}

            <div className='login__container'>
                <h1>Sign-in</h1>
                {error && <p style={{color:'red'}}>All Details Is Mandatory,Please Fill</p>}
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={signIn} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login