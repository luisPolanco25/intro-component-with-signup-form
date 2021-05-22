import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import './login-form.css';
import errorIcon from '../../assets/icon-error.svg';
import { ErrorContext } from '../../context/ErrorContext';
import validator from 'validator';
import Swal from 'sweetalert2';

export const LoginForm = () => {

    const [formValues, handleInputChange] = useForm({
        firstName: 'Jonathan ',
        lastName: '',
        email: '',
        password: '',
    });    

    const {isFormValueCorrect, setIsFormValueCorrect} = useContext(ErrorContext);

    const {firstName, lastName, email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (firstName.trim() === '') {
            setIsFormValueCorrect(previousValue => ({...previousValue, firstName: false}));
        } else if (lastName.trim() === '') {
            setIsFormValueCorrect(previousValue => ({...previousValue, lastName: false}));
        } else if (!validator.isEmail(email)) {
            setIsFormValueCorrect(previousValue => ({...previousValue, email: false}));
        } else if (password.trim() === '') {
            setIsFormValueCorrect(previousValue => ({...previousValue, password: false}));
        } else {
            Swal.fire('', 'We\'ll get in touch with you shortly', 'success');
        }
    }
    
    return (
        <div id="login-area">

            <div id="try-free">
                <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>

            <form onSubmit={handleSubmit}>

                <input 
                    style={(isFormValueCorrect.firstName === false) ? {border: '2px solid hsl(0, 100%, 74%)'} : null}
                    aria-label="first name" 
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    autoComplete="off"
                    autoFocus
                    value={firstName}
                    onChange={handleInputChange}
                />
                
                <p 
                    className="error-text"
                    style={(isFormValueCorrect.firstName === false) ? {display:'block'} : null}
                >
                    First name cannot be empty
                </p>
                <img 
                    className="error-image" 
                    alt="Error" 
                    src={errorIcon} 
                    style={(isFormValueCorrect.firstName === false) ? {display: 'block'} : null}
                />

                <input 
                    style={(isFormValueCorrect.lastName === false) ? {border: '2px solid hsl(0, 100%, 74%)'} : null}
                    aria-label="last name" 
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    autoComplete="off"
                    value={lastName}
                    onChange={handleInputChange}
                />
                
                <p 
                    className="error-text"
                    style={(isFormValueCorrect.lastName === false) ? {display: 'block'} : null}
                >
                    Last name cannot be empty
                </p>
                <img 
                    className="error-image" 
                    alt="Error" 
                    src={errorIcon} 
                    style={(isFormValueCorrect.lastName === false) ? {display: 'block'} : null}
                />
                
                <input 
                    style={(isFormValueCorrect.email === false) ? {border: '2px solid hsl(0, 100%, 74%)'} : null}
                    aria-label="email address" 
                    name="email"
                    type="text" 
                    placeholder="Email address"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <p 
                    className="error-text"
                    style={(isFormValueCorrect.email === false) ? {display: 'block'} : null}
                >
                    Looks like this is not an email
                </p>
                <img 
                    className="error-image" 
                    alt="Error" 
                    src={errorIcon} 
                    style={(isFormValueCorrect.email === false) ? {display: 'block'} : null}
                />

                <input 
                    style={(isFormValueCorrect.password === false) ? {border: '2px solid hsl(0, 100%, 74%)'} : null}
                    aria-label="password" 
                    name="password"
                    type="password" 
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                <p 
                    className="error-text"
                    style={(isFormValueCorrect.password === false) ? {display: 'block'} : null}
                >
                    Password cannot be empty
                </p>
                <img 
                    className="error-image" 
                    alt="Error" 
                    src={errorIcon} 
                    style={(isFormValueCorrect.password === false) ? {display: 'block'} : null}
                />

                <button type="submit">CLAIM YOUR FREE TRIAL</button>
                <p id="terms">By clicking the button, you are agreeing to our <a href="https://luispolanco25.github.io/intro-component-with-signup-form">Terms and Services</a></p>
            </form>

        </div>
    )
}
