import { ObjectId } from "mongoose";
import BookingSchema from "../../models/booking-model";

export default {
    getRidesByUserId: async (userId: string) => {
        try {
            const rides = await BookingSchema.find({ user_id: userId })
            return rides || null
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}