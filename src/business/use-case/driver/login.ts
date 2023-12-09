import driverRepositoryGetQuery from "../../../adapters/data-access/repositories/driver/driver-getQuery";
import encryptionDecryption from "../../shared/encryptionDecryption";
import { Login } from "../../interfaces/common";
import { ObjectId } from "mongoose";

export default {
    login: async (data: Login) => {
        try {
            const driver = await driverRepositoryGetQuery.getDriverWithEmailId(data.email)

            if (driver) {
                const comparePassword = await encryptionDecryption.comparePassword(data.password, driver.password)
                if (!comparePassword) {
                    throw new Error("Invalid email or password")
                }
                else {
                    const token = encryptionDecryption.createToken(driver._id as ObjectId, "driver", "5h")
                    return token || null
                }
            } else {
                throw new Error("driver doesn't exists please signup !!!")
            }
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}