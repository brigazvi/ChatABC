import React, { useState, useEffect } from "react"
import { socket } from "./socket"
import Chat from "./pages/Chat"
import { UserContext } from "./context/UserContext"
import LoginForm from "./pages/LoginForm"

export default function App() {
  const [currentUser, setCurrentUser] = useState(``)
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    socket.on("connect", onConnect)
    socket.on("disconnect", onDisconnect)
    socket.on("download message", (args) => {
      setMessages((prev) => [...prev, args])
    })

    return () => {
      socket.off("connect", onConnect)
      socket.off("disconnect", onDisconnect)
    }
  }, [])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <span>{isConnected ? `connected` : `disconnected`}</span>
      {currentUser ? <Chat messages={messages} /> : <LoginForm />}
    </UserContext.Provider>
  )
}
