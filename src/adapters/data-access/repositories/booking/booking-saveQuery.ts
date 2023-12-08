import { ObjectId } from "mongoose";
import { Booking } from "../../../../business/interfaces/user";
import BookingSchema from "../../models/booking-model";



export default {
    saveDriver: async (data: Booking, userId: string) => {
        try {
            const booking = new BookingSchema({ ...data, user_id: userId })

            const savedBooking = await booking.save()
            return !!savedBooking
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },
}
