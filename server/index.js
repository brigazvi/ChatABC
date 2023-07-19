const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")
const app = express()
const cors = require(`cors`)
app.use(cors())
const httpServer = createServer(app)

const io = new Server(httpServer, {
  /* options */
})

io.on("connection", (socket) => {
  socket.on(`disconnect`, (reason) => {
    console.log(reason)
  })
  socket.on(`upload message`, (args) => {
    console.log(args.content)
    io.emit(`download message`, args)
  })
})

httpServer.listen(4000)
