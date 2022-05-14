import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firabase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    return (
        <div>
            <button onClick={() => signInWithGoogle()} class="btn btn-outline ">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;