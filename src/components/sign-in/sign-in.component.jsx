import React, {useState} from 'react';
import './sign-in.styles.scss'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../button/button.component.jsx'

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'


const SignIn = ({ emailSignInStart, googleSignInStart}) => {
  const [ userCredentials, setCredentials ] = useState({email:'', password: ''})



  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();



    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

      return(
          <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>sign-in with your email and password</span>

            <form onSubmit={handleSubmit}>
            <FormInput name='email' type='email' handleChange={handleChange} label="email" value={email} required/>
       
            <FormInput name='password' type='password' handleChange={handleChange} label="password" value={password} required />
            <div className="buttons">
            <CustomButton type="submit" value="Submit Form" >Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              {' '}Sign In with Google{' '}</CustomButton>
            </div>
            </form>
          </div>
      );
      }

const mapDispatchToProps = dispatch =>({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignIn);