import './SignUpPage.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUpForm from '../auth/SignUpForm';

export default function SignUpPage() {
  return (
    <div
      className='signup-background'
      // style={{ backgroundImage: `url(${loginBg})` }}
    >
      <Switch>
        <Route path='/sign-up/fan' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/sign-up/artist' exact={true}>
          <SignUpForm />
        </Route>
      </Switch>
    </div>
  );
}
