import React, {useEffect} from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import Header from './components/header/header.component.jsx'
import {checkUserSession,} from './redux/user/user.actions'
import { connect } from 'react-redux'

import { selectCurrentUser } from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect'
import { GlobalStyle} from './global.styles'

const App = ({ checkUserSession,currentUser }) => {
  useEffect(() =>{
    checkUserSession()
  },[checkUserSession])


    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                  <SignInAndSignUpPage />
                )
            }
          />
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser

});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps, mapDispatchToProps
 
)(App);