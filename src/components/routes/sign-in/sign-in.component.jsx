import { signInWithGooglePopUp, auth } from '../../../utils/firebase/firebase.utils.js';
import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';


const SignIn = ()=>{
    const logGoogleUser = async ()=>{
        const { user } = await signInWithGooglePopUp(); // const response = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user); // createUserDocumentFromAuth(response);
    }


    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
}

export default SignIn;