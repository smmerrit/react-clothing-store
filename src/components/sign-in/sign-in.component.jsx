import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../button/button.component.jsx'
import  { auth, signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
  constructor(props){
      super(props);

      this.state = { 
          email: '',
          password: ''
       }
  }
handleSubmit = async event =>{
    event.preventDefault();
const {email, password} = this.state
try {
  await auth.signInWithEmailAndPassword(email,password)
  this.setState({ email:'', password: '' }
      )
} catch(error){
  console.log(error);
}
}
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
      return(
          <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>sign-in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput name='email' type='email' handleChange={this.handleChange} label="email" value={this.state.email} required/>
       
            <FormInput name='password' type='password' handleChange={this.handleChange} label="password" value={this.state.password} required />
            <div className="buttons">
            <CustomButton type="submit" value="Submit Form" >Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}Sign In with Google{' '}</CustomButton>
            </div>
            </form>
          </div>
      );
  }
}
export default SignIn;