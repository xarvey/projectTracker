import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import HomeIndex from './components/index_home';
import UserLogin from './components/user/login';
import UserLogout from './components/user/logout';
import UserRegister from './components/user/register';
import UserProfileEmployee from './components/user/profile_employee';
import UserProfileManager from './components/user/profile_manager';
import ResetPassword from './components/user/reset_password';
import requireAuth from './utils/authenticated';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeIndex} />
        <Route path="/login" component={UserLogin} />
        <Route path="/logout" component={UserLogout} />
        <Route path="/register" component={UserRegister} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/profile_employee" component={UserProfileEmployee} onEnter={requireAuth} />
        <Route path="/profile_manager" component={UserProfileManager} onEnter={requireAuth} />

    </Route>

);
