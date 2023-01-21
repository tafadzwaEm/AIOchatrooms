import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../firebase-config'

const Sendmessage = () => {

  const [userMessage, setUserMessage] = useState('')

  const sendmessage = async (e) => {
      e.preventDefault()

      if(userMessage == ''){
        alert('Cannot send an empty message')
        return
      }

      const {uid, displayName} = auth.currentUser
      await addDoc(collection(db,'messages'),{
        text: userMessage,
        user: displayName,
        timestamp: serverTimestamp(),
        uid: uid
      })

      setUserMessage('')
  }

  return (
    <div className='sendmessagewindow'>
      <form onSubmit={sendmessage}>
        <textarea placeholder='Message' value={userMessage} onChange={(e)=>setUserMessage(e.target.value)}></textarea>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default Sendmessage