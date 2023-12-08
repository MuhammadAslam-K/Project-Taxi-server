import { ObjectId } from "mongoose";
import DriverSchema from "../../models/driver-model";



const driverRepositoryGetQuery = {

    getDriverWithEmailId: async (email: string) => {
        try {
            const driver = await DriverSchema.findOne({ email })
            return driver || null
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    getDriverWithMobileNo: async (mobile: string) => {
        try {
            const driver = await DriverSchema.findOne({ mobile })
            return driver || null
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
};

export default driverRepositoryGetQuery;