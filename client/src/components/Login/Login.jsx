import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import './Login.css';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
      event.preventDefault()
  
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  
      const data = await response.json()
  
      if (data._id) {
        alert('Login successful')
        window.location.href = '/dashboard'
      } else {
        alert('Please check your username and password')
      }
    }
    

   return (
      // <form onSubmit={loginUser}>
      //   <div>
      //       <input name='email' type="email" className="input-field" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      //       <input name='password' type="password" className="input-field" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      //       <button>Register</button>
      //   </div>
      // </form>
      <form onSubmit={loginUser}>
          <div className="container">
            <div className="box-1">
                <div className="content-holder">
                    <h2>Hello!</h2>
                  
                    <Link to={'/register'}><button className="button-1">Sign up</button></Link>
                </div>
            </div>

            <div className="box-2">
                <div className="login-form-container">
                    <h1>Login Form</h1>
                    <input name='email' type="email" className="input-field" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <input name='password' type="password" className="input-field" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br></br>
                    <button className="login-button">Login</button>
                </div>
            </div>
        </div>
      </form>    
    )
}
export default Login;


{/* <div class="container">
      <!--Data or Content-->
      <div class="box-1">
          <div class="content-holder">
              <h2>Hello!</h2>
             
              <button class="button-1" onclick="signup()">Sign up</button>
              <button class="button-2" onclick="login()">Login</button>
          </div>
      </div>

      <div class="box-2">
          <div class="login-form-container">
              <h1>Login Form</h1>
              <input type="text" placeholder="Username" class="input-field">
              <br><br>
              <input type="password" placeholder="Password" class="input-field">
              <br><br>
              <button class="login-button" type="button">Login</button>
          </div>
      </div>
</div> */}