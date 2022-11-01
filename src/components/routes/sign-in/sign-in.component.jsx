import { createUserDocumentFromAuth,
        signInWithGoogleRedirect,
        auth,
        signInWithGooglePopUp } from '../../../utils/firebase/firebase.utils';
import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from "../../sign-up-form/sign-up-form.component";


const SignIn = ()=>{

    /*useEffect(()=>{
        async function getRedirectRes(){
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        getRedirectRes();
    },[]);*/

    const logGoogleUser = async ()=>{
        const { user } = await signInWithGooglePopUp(); // const response = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user); // createUserDocumentFromAuth(response);
    }


   /* const logGoogleRedirectUser = async ()=>{
        const { user } = await signInWithGoogleRedirect();
        console.log({user});
    }*/ // function was needed only for console.logging the result

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            {/*<button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>*/}
            <SignUpForm/>
        </div>
    );
}

export default SignIn;