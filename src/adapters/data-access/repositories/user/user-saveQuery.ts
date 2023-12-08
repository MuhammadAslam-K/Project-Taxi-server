
import { Signup } from "../../../../business/interfaces/common"
import UserSchema from "../../models/user-model"


export default {
    saveUser: async (data: Signup) => {
        try {
            const user = new UserSchema({ ...data })

            const savedUser = await user.save()
            return !!savedUser
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },
}