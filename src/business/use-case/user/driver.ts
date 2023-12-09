import driverRepositoryGetQuery from "../../../adapters/data-access/repositories/driver/driver-getQuery"

export default {

    getDriverInfoById: async (driverId: string) => {
        try {
            const result = await driverRepositoryGetQuery.getDriverWithDriverId(driverId)
            return result || null
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}