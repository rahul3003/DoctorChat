import React, { useState } from 'react'

import Cookies from 'universal-cookie'
import axios from 'axios'

import signInImage from '../assets/signup.jpg'
const Auth = () => {
    const [isSign, setIsSign] = useState(true)

    const switchMode = () => {
        setIsSign((preIsSign) => !preIsSign)
    }

    const handleChange = () => { }
    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSign ? 'SignUp' : 'SignIn'}</p>
                    <form onSubmit={() => { }}>
                        {isSign && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    name='fullName'
                                    placeholder='Full Name'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name='username'
                                placeholder='Username'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSign && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="PhoneNumber">Phone Number</label>
                                <input
                                    type="text"
                                    name='PhoneNumber'
                                    placeholder='Phone Number'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSign && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input
                                    type="text"
                                    name='avatarURL'
                                    placeholder='Avatar URL'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder='Password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSign && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    name='fullName'
                                    placeholder='Confirm Password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSign ? "Already have an account" : "Don't have an account?"}
                            <span onClick={switchMode}>
                                {isSign ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth