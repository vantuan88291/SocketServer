import express from 'express'
import { createServer } from 'http'
import * as IO from 'socket.io'
import ProcessData from './ProcessData'

class SocketHelper {
    constructor() {
        this.configSocket()
        this.showConnectFromWeb()
        this.io.on('connection', this.listener)
        this.mSocket.setSocket(this.io)
    }
    configSocket = () => {
        this.mSocket = new ProcessData()
        this.app = express()
        this.server = createServer(this.app)
        this.io = IO.listen(this.server)
    }
    showConnectFromWeb = () => {
        this.server.listen(3000,() => {
            console.log('Node app is running on port 3000')
        })
        this.app.get('/', (req, res) => {
            res.send('Chat Server is running on port 3000')
        });
    }
    listener = (socket) => {
        console.log('new user join')
        socket.on('getAllData', this.mSocket.emitAllData)
        socket.on('sendmsg', this.mSocket.onSendMsg)
        socket.on('disconnect', this.mSocket.onDisconnect)
    }
}
module.exports = SocketHelper
