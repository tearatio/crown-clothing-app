import { useState } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';

const defaultFormField = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
};


const SignUpForm = ()=>{

    const [formFields, setFormField] = useState(defaultFormField);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields);

    const resetFormFields = ()=>{
        setFormField(defaultFormField);
    }

    const handleSubmits = async (event)=>{

        event.preventDefault();

        if (password !== confirmPassword){
            alert("Your password doesn't match!")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (e) {
            if (e.code === 'auth/email-already-in-use'){alert('EMAIL ALREADY IN USE')} else{console.log(e);}
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
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmits}>

                <FormInput
                label='Display Name'
                type="text"
                required
                onChange={handleChange}
                name='displayName'
                value={displayName}
                />

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


                <FormInput
                label='Repeat password'
                type="password"
                required
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword}
                />

                <Button
                children='Sign up with email and password'
                type="submit"
                />

            </form>
        </div>
    );
}

export default SignUpForm;