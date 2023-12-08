import driverRepositoryGetQuery from "../../../adapters/data-access/repositories/driver/driver-getQuery";
import driverRepositorySaveQuery from "../../../adapters/data-access/repositories/driver/driver-saveQuery";
import { Signup } from "../../interfaces/common";
import encryptionDecryption from "../../shared/encryptionDecryption";


export default {
    registration: async (data: Signup) => {
        try {
            const [emailExists, mobileExists] = await Promise.all([
                driverRepositoryGetQuery.getDriverWithEmailId(data.email),
                driverRepositoryGetQuery.getDriverWithMobileNo(data.mobile)
            ])
            if (emailExists) throw new Error("Driver Exists please login !!!")
            if (mobileExists) throw new Error("Driver with same Mobile No already exists")

            const hashPassword = await encryptionDecryption.hashPassword(data.password)
            data.password = hashPassword
            const result = await driverRepositorySaveQuery.saveDriver(data)
            return !!result
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}