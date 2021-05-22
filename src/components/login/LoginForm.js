import React from 'react';
import './login-form.css';

export const LoginForm = () => {
    return (
        <div id="login-area">

            <div id="try-free">
                <p>Try it free 7 days then $20/mo. thereafter</p>
            </div>

            <form>
                <input 
                    aria-label="first name" 
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    autoComplete="off"
                    autoFocus
                />
                <input 
                    aria-label="last name" 
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    autoComplete="off"
                />
                <input 
                    aria-label="email address" 
                    name="email"
                    type="email" 
                    placeholder="Email address"
                    autoComplete="off"
                />
                <input 
                    aria-label="password" 
                    name="password"
                    type="password" 
                    placeholder="Password"
                    autoComplete="off"
                />

                <button type="submit">CLAIM YOUR FREE TRIAL</button>
                <p>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
            </form>

        </div>
    )
}
