import { DriverRideApproval } from "../../../../business/interfaces/driver";
import BookingSchema from "../../models/booking-model";

export default {
    updateBookingDriverStatusAndPrice: async (data: DriverRideApproval) => {
        try {
            const rides = await BookingSchema.findByIdAndUpdate(
                data.rideId,
                { price: data.price, driverStatus: "Approved", driver_id: data.driverId }
            )
            return rides || null
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
}