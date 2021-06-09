import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import signInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={signInAndUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
