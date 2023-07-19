import { useState } from "react"
import { socket } from "../socket"
import Message from "../components/Message"
import TypeBar from "../components/TypeBar"
export default function Chat({ messages }) {
  return (
    <>
      {messages.map((msg) => (
        <Message obj={msg} key={msg + `key`} />
      ))}

      <TypeBar />
    </>
  )
}
