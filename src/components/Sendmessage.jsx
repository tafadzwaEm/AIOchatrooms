import { addDoc, collection, serverTimestamp} from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../firebase-config'

const Sendmessage = ({room}) => {

  const [userMessage, setUserMessage] = useState('')

  const sendmessage = async (e) => {
      e.preventDefault()

      if(userMessage === ''){
        alert('Cannot send an empty message')
        return
      }

      const {uid, displayName} = auth.currentUser
      await addDoc(collection(db,room),{
        text: userMessage,
        user: displayName,
        time: String(Date().substr(0,21)),
        timestamp: serverTimestamp(),
        uid: uid
      })

      setUserMessage('')
  }

  const handleKey = (e) => {
    if(e.code == 'Enter' && e.shiftKey){
        return
      }else if(e.code === 'Enter'){
        sendmessage(e)    
      }
  }

  return (
    <div className='sendmessagewindow'>
      <form onSubmit={sendmessage}>
        <textarea placeholder='Message' value={userMessage} onKeyDown={handleKey} onChange={(e)=>setUserMessage(e.target.value)}></textarea>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default Sendmessage