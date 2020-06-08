import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'







function App() {
  return (
    <div>
  <switch>
    <Header />
<Route exact path ="/" component={HomePage} />
<Route path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
