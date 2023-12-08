import { ObjectId } from "mongoose";
import UserSchema from "../../models/user-model"



const userRepositoryGetQuery = {

    getUserWithEmailId: async (email: string) => {
        try {
            const user = await UserSchema.findOne({ email })
            return user || null
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    getUserWithMobileNo: async (mobile: string) => {
        try {
            const user = await UserSchema.findOne({ mobile })
            return user || null
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
};

export default userRepositoryGetQuery;