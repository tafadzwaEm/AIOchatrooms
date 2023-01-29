import React from 'react'
import { useState } from 'react'
import Messages from './Messages'
import Sendmessage from './Sendmessage'


const ChatroomSelector = () => {

    const [selectedRoom, setSelectedRoom] = useState('')
    const [activeChat, setActiveChat] = useState(false)

    const selectRoom = (room) =>{
        setSelectedRoom(room)
        console.log("selected room: "+room)
        setActiveChat(true)
    }

    const exitChat = () => {
        setActiveChat(false)
    }

  return (
    <>
        {activeChat ? <> <div className='roomHeader'>
                            <button onClick={exitChat}>Exit Chat</button>
                            <h3>{selectedRoom.toLocaleUpperCase()}</h3> 
                            <div>Contact</div>
                        </div> 
                        <Messages room={selectedRoom}/> 
                        <Sendmessage room={selectedRoom}/> 
                        </>:
            <div className='chatroomSelector'>
            <div className="chatroomSelectorHeader">
                <h2>ALL CHATROOMS</h2>
                {/* FUTURE: Search for a specific chatroom */}
            </div>
            <button onClick={()=>selectRoom('football')}>Football</button>
            <button onClick={()=>selectRoom('career')}>Career</button>
            <button onClick={()=>selectRoom('jokes')}>Jokes & Memes</button>
            <button onClick={()=>selectRoom('fashion')}>Fashion</button>
            <button onClick={()=>selectRoom('messages')}>General</button>
        </div>
        }
    </>
  )
}

export default ChatroomSelector
