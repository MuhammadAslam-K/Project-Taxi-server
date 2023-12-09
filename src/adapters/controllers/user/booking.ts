import { Request, Response } from "express"
import booking from "../../../business/use-case/user/booking"


export default {
    booking: async (req: Request, res: Response) => {
        try {
            res.json(await booking.bookNewRide(req.body, req.token.data))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },
}