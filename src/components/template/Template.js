import React from 'react';
import { LoginForm } from '../login/LoginForm';
import './template.css';

export const Template = () => {
    return (
        <main>

            <div id="page-text">
                <h1>Learn to code by watching others</h1>
                <p>
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                    but understanding how developers think is invaluable.
                </p>  
            </div>

            <LoginForm />
        </main>
    )
}
