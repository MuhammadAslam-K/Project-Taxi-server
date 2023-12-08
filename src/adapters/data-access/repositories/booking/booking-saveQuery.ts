import { Booking } from "../../../../business/interfaces/user";
import BookingSchema from "../../models/booking-model";



export default {
    saveDriver: async (data: Booking) => {
        try {
            const booking = new BookingSchema({ ...data })

            const savedBooking = await booking.save()
            return !!savedBooking
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },
}
