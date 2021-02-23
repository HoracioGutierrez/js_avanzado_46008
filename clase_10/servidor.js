const express = require("express")
const server = express()
const app = require("http").createServer(server)
const io = require('socket.io')(app,{
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
})

server.get("/",(req,res)=>{
    res.sendFile(__dirname+"/dist/index.html")
})

io.on("connection",socket=>{
    
    console.log("Se conecto un nuevo socket",socket.id)

    socket.on("mensaje_front",mensaje=>{
        console.log("Se recibio un nuevo mensaje de ",socket.id)
        console.log(mensaje)
        socket.broadcast.emit("mensaje_back",mensaje)
    })

})

app.listen(8000,()=>{
    console.log("Se inicio un servidor web")
})