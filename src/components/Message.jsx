import { serverTimestamp } from 'firebase/firestore'
import React, { useEffect, useRef } from 'react'
import { auth } from '../firebase-config'

const Message = ({message}) => {

  const ref = useRef()

  useEffect(()=>{
    ref.current?.scrollIntoView({behaviour: "smooth"})
  },[message])

  return (

    <div className='message' ref={ref}>
        <div className={message.uid === auth.currentUser.uid ? "sent": "received"}>
            <small>{message.user}</small>
            <p>{message.text} <br/> <span>{message.timestamp.toDate().toString().substr(16,5)}</span></p>
            
        </div>    
    </div>
  )
}

export default Message
