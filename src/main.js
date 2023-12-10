import express  from "express";
import { PORT } from "./config.js";
import { apiRouter } from "./routers/api.router.js";
import { webRouter } from './routers/web.router.js'
import handlebars from 'express-handlebars'
import {Server} from 'socket.io'
import { messagesManager } from "./daos/models/Message.js";

const app = express()

app.engine('handlebars', handlebars.engine())

const server = app.listen(PORT, ()=>{console.log(`servidor escuchando en puerto ${PORT}`)})

const websocketServer = new Server(server)

app.use('/static', express.static('./static'))
app.use('/api', apiRouter)
app.use('/', webRouter)

websocketServer.on('connection', async (socket)=>{
    socket.broadcast.emit('nuevoUsuario', socket.handshake.auth.user)

    const emitirMensajes = async () => {
        const mensajes = await messagesManager.find().lean();
        websocketServer.emit('mensajes', mensajes);
    };

    socket.on('mensaje', async (mensaje)  =>{
        try {
            const newMessage = await messagesManager.create(mensaje);
            await emitirMensajes();
        } catch (error) {
            console.error('Error al guardar el mensaje en la base de datos:', error.message);
        }
    })

    socket.on('disconnecting', ()=>{
        socket.broadcast.emit('usuarioDesconectado', socket.handshake.auth.user)
    })
    
    socket.emit('mensajes', await messagesManager.find().lean());
    
})

