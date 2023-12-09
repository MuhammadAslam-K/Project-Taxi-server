import { Server as SocketIOServer, Socket } from "socket.io";
import chat from "../../business/use-case/chat/chat";


export const setUpSocketIO = (server: any): void => {
    const io: SocketIOServer = new SocketIOServer(server, {
        cors: {
            origin: "*",
            credentials: true
        },
    });


    io.on('connect', (socket: Socket) => {
        console.log('connected:', socket.id);


        // CHAT
        socket.on("join-chat", async (rideId) => {
            console.log("join-chat", rideId)
            const result = await chat.getChatByRideId(rideId)
            io.emit("chat-message", result, rideId)
        })

        socket.on("update-chat-message", async (data) => {
            console.log("update-chat-message", data)
            const result = await chat.saveChat(data)
            io.emit("chat-message", result?.messages, data.rideId)
        })


    });

    io.on('error', (error) => {
        console.error('Socket.IO error:', error);
    });
};
