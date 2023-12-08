import { ObjectId } from "mongoose"
import bookingSaveQuery from "../../../adapters/data-access/repositories/booking/booking-saveQuery"
import { Booking } from "../../interfaces/user"

export default {

    bookNewRide: async (data: Booking, userId: string) => {
        try {
            const result = await bookingSaveQuery.saveDriver(data, userId)
            return !!result
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}