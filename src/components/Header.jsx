import React from 'react'
import SignIn from './SignIn'
import { auth } from '../firebase-config'

const Header = ({user}) => {

  const signOut = () => {
      signOut(auth)
  }

  return (
    <div className='header'>
        <p>ChatWithEmmanuel <br /> <span>App Version: Test 0.0.1</span> </p>
        {
          user ? <button onClick={() => auth.signOut()}>Log Out</button>:
          <SignIn />
        }
    </div>
  )
}

export default Header