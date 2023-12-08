import bookingGetQuery from "../../../adapters/data-access/repositories/booking/booking-getQuery";


export default {
    getRidesOfUserById: async (userId: string) => {
        try {
            const response = await bookingGetQuery.getRidesByUserId(userId)
            const approved = response.filter((item) => item.driverStatus === "Approved")
            const unApproved = response.filter((item) => item.driverStatus === "Pending")
            const completed = response.filter((item) => item.status === "Completed")
            const data = { approved, unApproved, completed }
            return data || null
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}