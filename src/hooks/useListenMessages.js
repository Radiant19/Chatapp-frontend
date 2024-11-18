import React, { useEffect } from 'react'
import {useSocketContext} from '../context/SocketContext'
import useConversation from '../zustand/newConvesation'
import notifsound from "../assets/sounds/sound.mp3"

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages,setMessages} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake=true;
        const sound = new Audio(notifsound);
        sound.play()
        setMessages([...messages,newMessage])
    })

    return () => socket?.off("newMessage")
  },[socket,setMessages,messages])
}

export default useListenMessages
