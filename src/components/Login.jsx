import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-form w-25 mx-auto h-50 mt-4 p-5 border border-1px ">

      <h2 className='h2 ms-5'>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" required />
        </div>
        <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
          
        <button type="submit" className="btn btn-primary ms-5">Login</button>
       
        
      </form>
    </div>
  );
}

export default Login;
