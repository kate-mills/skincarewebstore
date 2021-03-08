//import React, {Suspense} from 'react';
import React from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.css';

//import Spinner from './components/spinner/spinner.component';
//import ErrorBoundary from './components/error-boundary/error-boundary.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import Header from './components/header/header.component'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        {/*<ErrorBoundary>
           <Suspense fallback={<Spinner />}> */}
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='*' component={ErrorPage} />
          {/* </Suspense> </ErrorBoundary>*/}
      </Switch>
    </div>
  );
};
export default App
