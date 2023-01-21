import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase-config'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'


const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div>
        <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}

export default SignIn
