import React from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/dashboard')
    }

    const handleLogin = () => {
        navigate('/dashboard')
    }
  return (
    <form className='mt-5' onSubmit={handleSubmit(handleLogin)}>
        <div className="container mt-5">
            <div className="wrapper d-flex align-items-center justify-content-center h-100">
                <div className="card login-form">
                <div className="card-body">
                    <h5 className="card-title text-center">Login Form</h5>

                    <h5 className="card-title text-success"><Link to="/dashboard">View Dashboard</Link></h5>
                    <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" disabled />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" disabled />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled>Submit</button>
                    <div className="sign-up mt-4">
                        Don't have an account? <a href="#">Create Account</a>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </form>

  )
}

export default Login