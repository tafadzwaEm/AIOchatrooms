import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase-config'
import Message from './Message'

const Messages = ({room}) => {
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    const q = query(collection(db,room), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
      let messages = []
      querySnapshot.forEach((doc)=>{
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages)
    })
    return () => unsubscribe()

  },[room])

  return (
    <div className='messageswindow'>  
      {messages ? messages.map((message)=>(
          <Message key={message.id} message={message} room={room} messageId={message.id}/>
        )) :
        <p>No messages yet</p>
      }                        
    </div>
  )
}

export default Messages