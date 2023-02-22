import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import firebaseApp from '../../firebase/firebase';
import { Link} from 'react-router-dom';
import './Register.css';

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event) {
      event.preventDefault()

      await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  
      const response = await fetch('http://ec2-44-210-141-198.compute-1.amazonaws.com:3001/api/users/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
  
      const data = await response.json()
  
      if (data.status === 'ok') {
        navigate('/login');
      }
    }
    
   return (
    // <div>

    //   <h1>Register</h1>

    //   <div>
    //     <form onSubmit={registerUser}>
    //       <input name='name' type="text" className="input-field" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
    //       <input name='email' type="text" class="input-field" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //       <input name='password' type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //       <button>Register</button>
    //     </form>
    //   </div>

    // </div>

    <form onSubmit={registerUser}>
      <div className="container">
        <div className="box-1">
            <div className="content-holder">
                <h2>Hello!</h2>
              
                <Link to={'/login'}><button className="button-1">Register</button></Link>
            </div>
        </div>

        <div className="box-2">
            <div className="login-form-container">
                <h1>Register Form</h1>
                <input name='name' type="text" className="input-field" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br></br>
                <input name='email' type="text" className="input-field" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br></br>
                <input name='password' type="password" className="input-field" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br></br>
                <button className="login-button">Login</button>
            </div>
        </div>
      </div>
    </form>
  
  );

}

export default Register;
  
