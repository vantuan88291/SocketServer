
const dataMsg = []
class ProcessData {
    constructor() {
    }

    setSocket = (socket) => {
        this.socket = socket
    }
    onSendMsg = (data) => {
        dataMsg.push(data)
        this.socket.emit("newmsg", data)
        console.log('msg', dataMsg)

    }
    onDisconnect = () => {
        console.log('user left')
    }
    emitAllData = () => {
        this.socket.emit("allData", dataMsg)
    }
}
module.exports = ProcessData
