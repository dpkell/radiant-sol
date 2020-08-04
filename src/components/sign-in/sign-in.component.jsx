import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import LoginButton from '../login-button/login-button.component';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    
    const {email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        //emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };


    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
            />
            <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
            />
            <ButtonsBarContainer>
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google
                </CustomButton>
            </ButtonsBarContainer>
            </form>
      </SignInContainer>
    );
}

export default SignIn;