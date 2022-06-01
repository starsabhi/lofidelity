import './LoginPage.css';
import React from 'react';

import LoginForm from '../auth/LoginForm';

export default function LoginPage() {
  return (
    <div
      className='login-background'
      // style={{ backgroundImage: `url(${loginBg})` }}
    >
      <LoginForm />
    </div>
  );
}
