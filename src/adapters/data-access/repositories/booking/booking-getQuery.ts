import BookingSchema from "../../models/booking-model";

export default {
    getRidesByUserId: async (userId: string) => {
        try {
            const rides = await BookingSchema.find({ user_id: userId })
            return rides || null
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    getBookingByLocation: async (pickupLocation: string) => {
        try {
            const rides = await BookingSchema.find({ pickupLocation, driverStatus: "Pending" })
            return rides || null
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
}