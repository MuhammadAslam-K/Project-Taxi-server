import { chat } from "../../../../business/interfaces/common";
import ChatSchema from "../../models/chat";



export default {
    createNewChat: async (data: chat) => {
        try {
            const chat = new ChatSchema({
                rideId: data.rideId,
                messages: data.message
            })
            const result = await chat.save()
            return result
        } catch (error) {
            throw new Error((error as Error).message);

        }
    }
}