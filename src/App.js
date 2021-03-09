import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { connect } from 'react-redux'

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'


class App extends React.Component{

  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      this.props.setCurrentUser({ userAuth }) // null;
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render () {
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
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App)


//import React, {Suspense} from 'react';
//import Spinner from './components/spinner/spinner.component';
//import ErrorBoundary from './components/error-boundary/error-boundary.component';
