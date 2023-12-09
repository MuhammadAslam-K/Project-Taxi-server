
import { Signup } from "../../../../business/interfaces/common"
import DriverSchema from "../../models/driver-model"


export default {
    saveDriver: async (data: Signup) => {
        try {
            const driver = new DriverSchema({ ...data })

            const savedDriver = await driver.save()
            return !!savedDriver
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },
}