//import React, {Suspense} from 'react';
import React from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.css';

//import Spinner from './components/spinner/spinner.component';
//import ErrorBoundary from './components/error-boundary/error-boundary.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ErrorPage from './pages/errorpage/errorpage.component';


function App() {
  return (
    <div>
      <Switch>
        {/*<ErrorBoundary>
           <Suspense fallback={<Spinner />}> */}
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/' component={HomePage} />
            <Route path='/*' component={ErrorPage} />
          {/* </Suspense> </ErrorBoundary>*/}
      </Switch>
    </div>
  );
};
export default App
