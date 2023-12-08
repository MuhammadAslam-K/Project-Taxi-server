import userRepositoryGetQuery from "../../adapters/data-access/repositories/user/user-getQuery";
import userRepositorySaveQuery from "../../adapters/data-access/repositories/user/user-saveQuery";
import { Signup } from "../interfaces/common";
import encryptionDecryption from "../shared/encryptionDecryption";


export default {
    registration: async (data: Signup) => {
        try {
            const [emailExists, mobileExists] = await Promise.all([
                userRepositoryGetQuery.getUserWithEmailId(data.email),
                userRepositoryGetQuery.getUserWithMobileNo(data.mobile)
            ])
            if (emailExists) throw new Error("User Exists please login !!!")
            if (mobileExists) throw new Error("User with same Mobile No already exists")

            const hashPassword = await encryptionDecryption.hashPassword(data.password)
            data.password = hashPassword
            const result = await userRepositorySaveQuery.saveUser(data)
            return !!result
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}