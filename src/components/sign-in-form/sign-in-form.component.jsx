import { useState } from "react";
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import {
    createUserDocumentFromAuth,
    signInWithGooglePopUp,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    email:'',
    password:'',
};


const SignInForm = ()=>{

    const [formFields, setFormField] = useState(defaultFormField);
    const { email, password } = formFields;

    const resetFormFields = ()=>{
        setFormField(defaultFormField);
    }

    const signInWithGoogle = async ()=>{
        const { user } = await signInWithGooglePopUp();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmits = async (event)=>{
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (e) {
            switch(e.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for the email')
                    break
                case 'auth/user-not-found': alert('No user has been found under this email')
                    break
                default: console.log(e) }
            }
    };

    const handleChange = (event)=>{
    const { name, value } = event.target;
    setFormField({
        ...formFields, [name] : value
    });
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmits}>

                <FormInput
                label='Email'
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
                />

                <FormInput
                label='Password'
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={password}
                />

                <div className='buttons-container'>
                <Button
                children='Sign In'
                type="submit"
                />

                <Button
                    type='button'
                    buttonType='google'
                    children='Google Sign In'
                    onClick={signInWithGoogle}
                />
                </div>

            </form>
        </div>
    );
}

export default SignInForm;