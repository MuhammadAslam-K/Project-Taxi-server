import { Request, Response } from "express"
import driver from "../../../business/use-case/user/driver"


export default {
    driverInfo: async (req: Request, res: Response) => {
        try {
            res.json(await driver.getDriverInfoById(req.query.driverId as string))
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: (error as Error).message })
        }
    },
}