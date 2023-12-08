import userRepositoryGetQuery from "../../../adapters/data-access/repositories/user/user-getQuery";
import encryptionDecryption from "../../shared/encryptionDecryption";
import { Login } from "../../interfaces/common";
import { ObjectId } from "mongoose";

export default {
    login: async (data: Login) => {
        try {
            const user = await userRepositoryGetQuery.getUserWithEmailId(data.email)

            if (user) {
                const comparePassword = await encryptionDecryption.comparePassword(data.password, user.password)
                if (!comparePassword) {
                    throw new Error("Invalid email or password")
                }
                else {
                    const token = encryptionDecryption.createToken(user._id as ObjectId, "user", "5h")
                    return token || null
                }
            } else {
                throw new Error("User doesn't exists please login !!!")
            }
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}