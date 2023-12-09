import { Request, Response } from "express"
import ride from "../../../business/use-case/driver/ride"
import { DriverRideApproval } from "../../../business/interfaces/driver"


export default {
    getRides: async (req: Request, res: Response) => {
        try {
            res.json(await ride.getBookingByPickupLocation(req.query.value as string))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    driverAcceptRide: async (req: Request, res: Response) => {
        try {
            const data: DriverRideApproval = {
                rideId: req.query.rideId as string,
                price: req.query.price as string,
                driverId: req.token.data
            }
            res.json(await ride.updateBookingAsDriverApproved(data))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    ridesByDriverId: async (req: Request, res: Response) => {
        try {
            res.json(await ride.ridesByDriverId(req.token.data))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }
}