import './SignUpPage.css';
import React from 'react';

import SignUpForm from '../auth/SignUpForm';

export default function SignUpPage() {
  return (
    <div
      className='signup-background'
      // style={{ backgroundImage: `url(${loginBg})` }}
    >
      <SignUpForm />
    </div>
  );
}
