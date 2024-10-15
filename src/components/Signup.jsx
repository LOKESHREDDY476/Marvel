import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validateName, validatePassword, validatePhoneNumber } from './Utils';

export const Signup=()=>{
  //state variables
  var [fname, setFname] = useState('');
  var [email, setEmail] = useState('');
  var [phoneNumber, setPhoneNumber] = useState('');
  var [password, setPassword] = useState('');
  var [cpassword, setCpassword] = useState('');
  //state errors
  var [fnameError, setFnameError] = useState('');
  var [emailError, setEmailError] = useState('');
  var [phoneNumberError, setPhoneNumberError] = useState('');
  var [passwordError, setPasswordError] = useState('');
  var [cpasswordError, setCpasswordError] = useState('');


  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (validateName){
      setFnameError('')
    }else{
      setFnameError('Please enter a valid name')
    }
    if (validateEmail(email)){
      setEmailError('')
      }else{
        setEmailError('Please enter a valid email')
    }
    if (validatePhoneNumber(phoneNumber)){
      setPhoneNumberError('')
      }else{
        setPhoneNumberError('Please enter a valid phone number')
    }
    if (validatePassword){
      setPasswordError('')
      }else{
        setPasswordError('Please enter a valid password')
    }
    if (validatePassword(cpassword)){
      setCpasswordError('')
      }else{
        setCpasswordError('Please enter a valid password')
    
  }

  
    

    console.log({ fname, email, phoneNumber, password, cpassword });
  };
  
 
  

  return (
    <div className="signup-form w-25 mx-auto h-50 border border-1px p-5 mb-3">
      <h2>Sign Up</h2>
      <form >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
           {fname &&  <div className='text-danger'>{fnameError}</div>}

        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required

          />
          {email &&  <div className='text-danger'>{emailError}Invalid email address</div>}

        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
           {phoneNumber  && <div className='text-danger'>{phoneNumberError}Invalid phone number</div>}

        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           {password  && <div className='text-danger'>{passwordError}Invalid password</div>}

        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            required
          />
           {cpassword && password !== cpassword && <div className='text-danger'>{cpasswordError}Passwords do not match</div>}

        </div>

        <div className="links">
          <p>Already have an account? <Link to="/login">Login</Link></p>
          <Link to="/home">Home</Link>
        </div>

        <button type="submit" className="btn btn-primary" onClick={(e)=>{
          handleCreateAccount(e);
        }

        }>Sign Up</button>
      </form>
    </div>
  );
}
