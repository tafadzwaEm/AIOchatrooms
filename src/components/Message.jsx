
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
            <p>{message.text} <br/> <span>
                { 
                  String(Date().substr(8,2)) === message.time.substr(8,2)?
                  "Today - "+message.time.substr(16):
                  message.time.substr(0,11)+"-"+message.time.substr(15)                
                }
            </span>
            </p>
            
        </div>    
    </div>
  )
}

export default Message
