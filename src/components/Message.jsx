
import React, { useEffect, useRef, useState } from 'react'
import { auth, db } from '../firebase-config'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'

const Message = ({message, room, messageId}) => {

  const [showForm, setShowForm] = useState(false)
  const [editMessage, setEditMessage] = useState('')

  const ref = useRef()

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const deleteMessage = async(messageId) => {
    console.log(messageId)
      await deleteDoc(doc(db, room, messageId))
  }

  const updateMessage = async(messageId) =>{
      const msg = doc(db,room,messageId)
      const newMsg = {text: editMessage}
      await updateDoc(msg, newMsg)
      
  }

  const formSubmit = async(e) => {
      e.preventDefault()

      if(editMessage === ''){
        setShowForm(false)
        alert('Message was not edited')
        return
      }

      await updateMessage(messageId)
      setEditMessage('')
      setShowForm(false)
  }

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

              { message.uid === auth.currentUser.uid &&
                    <><FaPencilAlt style={{color: 'yellow', cursor:'pointer'}} onClick={toggleForm}/>
                    <FaTrashAlt style={{color: 'yellow', cursor:'pointer'}} onClick={()=>deleteMessage(messageId)}/> </> 
              }
            </span>
            { showForm && <form onSubmit={formSubmit}>
              <input type="text" defaultValue={message.text} onChange={(e)=>setEditMessage(e.target.value)}/>
              <button type='submit'>Edit</button>
            </form>}
            </p>
            
        </div>    
    </div>
  )
}

export default Message
