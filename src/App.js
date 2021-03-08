import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component'


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact><HomePage/></Route>
          <Route path="/shop"><ShopPage/></Route>
          <Route path="/signin"><SignInAndSignUp/></Route>
          <Route path="*"><ErrorPage/></Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App


//import React, {Suspense} from 'react';
//import Spinner from './components/spinner/spinner.component';
//import ErrorBoundary from './components/error-boundary/error-boundary.component';
