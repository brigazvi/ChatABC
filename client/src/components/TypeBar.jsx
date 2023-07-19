import { useContext, useRef } from "react"
import { socket } from "../socket"
import { UserContext } from "../context/UserContext"

export default function TypeBar() {
  const { currentUser } = useContext(UserContext)
  const input = useRef()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const msg = input.current.value
        socket.emit(`upload message`, {
          content: msg,
          author: currentUser,
          time: Date.now(),
        })
        input.current.value = ``
      }}
    >
      <input type="text" name="msg" id="msg" ref={input} />
      <button type="submit">submit</button>
    </form>
  )
}
