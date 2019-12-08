
const dataUser = []
class ProcessData {
    constructor() {
    }

    setSocket = (socket) => {
        console.log('new user join')
        this.socket = socket
    }
    onSendMsg = (msg) => {
        console.log('msg', msg)

    }
    onDisconnect = () => {
        console.log('user left')
    }
    addUser = (data) => {
        dataUser.push(data)
        console.log('list user', dataUser)
    }
}
module.exports = ProcessData
