import { signInWithGooglePopUp, auth } from '../../../utils/firebase/firebase.utils.js';


const SignIn = ()=>{
    const logGoogleUser = async ()=>{
        const response = await signInWithGooglePopUp();
        console.log(response);
    }


    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
}

export default SignIn;