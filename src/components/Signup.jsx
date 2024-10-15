import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validateName, validatePhoneNumber, validatePassword } from './Utils';

export const Signup = () => {
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleCreateAccount = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!validateName(fname)) newErrors.fname = 'Invalid name';
    if (!validateEmail(email)) newErrors.email = 'Invalid email';
    if (!validatePhoneNumber(phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    if (!validatePassword(password)) newErrors.password = 'Invalid password';
    if (password !== cpassword) newErrors.cpassword = 'Passwords do not match';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ fname, email, phoneNumber, password, cpassword });
    }
  };

  return (
    <div className="signup-form w-25 mx-auto h-50 border p-5 mb-3">
      <h2>Sign Up</h2>
      <form>
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
          {errors.fname && <div className='text-danger'>{errors.fname}</div>}
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
          {errors.email && <div className='text-danger'>{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errors.phoneNumber && <div className='text-danger'>{errors.phoneNumber}</div>}
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
          {errors.password && <div className='text-danger'>{errors.password}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirm-password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            required
          />
          {errors.cpassword && <div className='text-danger'>{errors.cpassword}</div>}
        </div>

        <p>Already have an account? <Link to="/login">Login</Link></p>
        <button type="submit" className="btn btn-primary ms-5" onClick={handleCreateAccount}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
