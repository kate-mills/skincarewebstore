import React, {Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Spinner from './components/spinner/spinner.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Switch>
        <Suspense fallback={<Spinner/>}>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
