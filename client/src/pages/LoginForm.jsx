import { useContext, useRef } from "react"
import { UserContext } from "../context/UserContext"

export default function LoginForm() {
  const { setCurrentUser } = useContext(UserContext)
  const input = useRef()
  return (
    <div className="w-screen h-screen flex bg-teal-800 text-white items-center justify-center">
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          setCurrentUser(input.current.value)
        }}
      >
        <input type="text" name="userName" id="userName" placeholder="name" ref={input} />
        <button type="submit">login</button>
      </form>
    </div>
  )
}
