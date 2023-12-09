import chatRepositoryGetQuery from "../../../adapters/data-access/repositories/chat/chat-GetQuery"
import chatRepositorySaveQuery from "../../../adapters/data-access/repositories/chat/chat-saveQuery"
import chatRepositoryUpdateQuery from "../../../adapters/data-access/repositories/chat/chat-updateQuery"
import { chat } from "../../interfaces/common"




export default {
    saveChat: async (data: chat) => {
        try {
            const checkChatExists = await chatRepositoryGetQuery.getChatByRideId(data.rideId)

            if (checkChatExists) {
                return await chatRepositoryUpdateQuery.updateChat(checkChatExists._id, data.message)
            }
            else {
                return await chatRepositorySaveQuery.createNewChat(data)
            }
            // return true
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    getChatByRideId: async (rideId: string) => {
        try {
            const response = await chatRepositoryGetQuery.getChatByRideId(rideId)
            return response?.messages
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}