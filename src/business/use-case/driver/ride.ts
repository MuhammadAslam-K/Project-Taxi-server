import bookingGetQuery from "../../../adapters/data-access/repositories/booking/booking-getQuery"
import bookingUpdateQuery from "../../../adapters/data-access/repositories/booking/booking-updateQuery"
import { DriverRideApproval } from "../../interfaces/driver"

export default {
    getBookingByPickupLocation: async (data: string) => {
        try {
            const rides = await bookingGetQuery.getBookingByLocation(data)
            return rides || null
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    updateBookingAsDriverApproved: async (data: DriverRideApproval) => {
        try {
            const rides = await bookingUpdateQuery.updateBookingDriverStatusAndPrice(data)
            return !!rides
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    ridesByDriverId: async (driverId: string) => {
        try {
            const rides = await bookingGetQuery.getBookingByDriverId(driverId)
            const completedRides = rides.filter((item) => item.status == "Completed")
            const pendingRides = rides.filter((item) => item.status == "Pending")
            return { completedRides, pendingRides } || null
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}