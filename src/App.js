import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component'

import { auth } from './firebase/firebase.utils'


class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }

  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log('user', user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route path="/" exact><HomePage/></Route>
            <Route path="/shop"><ShopPage/></Route>
            <Route path="/signin"><SignInAndSignUp/></Route>
            <Route path="*"><ErrorPage/></Route>
          </Switch>
        </div>
      </Router>
    );
  }
};
export default App


//import React, {Suspense} from 'react';
//import Spinner from './components/spinner/spinner.component';
//import ErrorBoundary from './components/error-boundary/error-boundary.component';
