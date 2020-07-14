import React from 'react';
import './sign-in.styles.scss'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../button/button.component.jsx'

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'


class SignIn extends React.Component {
  constructor(props){
      super(props);

      this.state = { 
          email: '',
          password: ''
       }
  }



  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };



  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {googleSignInStart} = this.props
      return(
          <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>sign-in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput name='email' type='email' handleChange={this.handleChange} label="email" value={this.state.email} required/>
       
            <FormInput name='password' type='password' handleChange={this.handleChange} label="password" value={this.state.password} required />
            <div className="buttons">
            <CustomButton type="submit" value="Submit Form" >Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              {' '}Sign In with Google{' '}</CustomButton>
            </div>
            </form>
          </div>
      );
  }
}
const mapDispatchToProps = dispatch =>({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignIn);