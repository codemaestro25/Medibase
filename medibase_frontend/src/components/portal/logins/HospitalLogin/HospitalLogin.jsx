import React, { useEffect } from 'react'
import './HospitalLogin.css'
import HospitalImage from './hospital login.svg'
import { orgLogin } from '../../../../services/api'
const HospitalLogin = () => {


	const handleSubmit = async(e)=>{
		e.preventDefault();

		let orgDetails = await orgLogin(JSON.stringify({orgId:document.getElementById('orgId'), password : document.getElementById('orgPass')}));

		
	}

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const handleSignUpClick = () => {
      container.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      container.classList.remove("right-panel-active");
    };

    signUpButton.addEventListener('click', handleSignUpClick);
    signInButton.addEventListener('click', handleSignInClick);

    return () => {
      signUpButton.removeEventListener('click', handleSignUpClick);
      signInButton.removeEventListener('click', handleSignInClick);
    };
  }, []);



return (
<div>
     
    <div class="loginContainer" id="container">
	<div class="form-container sign-up-container">
		<form className='loginForm' action="#">
			<h1>Create Account</h1>
			
			<span>or use your email for registration</span>
			<input className= "loginInput" type="text" placeholder="Name" />
			<input type="email" className= "loginInput"placeholder="Email" />
			<input type="password" className= "loginInput" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form  className='loginForm' onSubmit={handleSubmit}>
			<h1>Login</h1>
			
			<span></span>
			<input className= "loginInput" type="text" placeholder="ID" id='orgId' />
			<input className= "loginInput" cltype="password" placeholder="Password"  id = 'orgPass' />
			
			<button type='submit'>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn" >Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<img src={HospitalImage}  style={{borderRadius: "8px"}} alt="" srcset="" />
				<p>Only for Authorized Hosptials</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>


 </div>
  )
}

export default HospitalLogin
