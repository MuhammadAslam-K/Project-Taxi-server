import bookingSaveQuery from "../../../adapters/data-access/repositories/booking/booking-saveQuery"
import { Booking } from "../../interfaces/user"

export default {

    bookNewRide: async (data: Booking) => {
        try {
            const result = await bookingSaveQuery.saveDriver(data)
            return !!result
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}