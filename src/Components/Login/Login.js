// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username,setUsername] = useState('Bhavesh')
    const [password,setPassword] = useState()
    const [showSuccessMessage,setShowSuccessMessage] = useState(false)
    const [showErrorMessage,setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    function handleSubmit(){
        if(username==='Bhavesh' && password==='123')
        {
            console.log('Success');
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/home`)
        }
        else
        {
            console.log('Failed');
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

  return (
    <div className='mt-[50%]'>
        <div className="container">
            {showSuccessMessage && <div className='successMessage text-blue-500'>Authentication Successfully</div>}
            {showErrorMessage && <div className='errorMessage text-red-500'>Authentication Failed. Please check your credentials.</div>}
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">
                Username
            </label>
            <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">
                Password
            </label>
            <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className='flex text-center'>
                <button type="submit" className="btn btn-primary">
                Login
                </button>
            </div>    
        </form>
        </div>
    </div>    
  );
};

export default Login;
